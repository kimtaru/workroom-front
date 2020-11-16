import ContentService from '../../services/ContentService';
import {
  createAction,
  createActions,
  handleActions,
} from 'redux-actions';
import {
  select,
  put,
  delay,
  call,
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';
import { useSelector } from 'react-redux';

const prefix = 'workroom-front/content';

const { start, success, fail } = createActions(
  'START',
  'SUCCESS',
  'FAIL',
  { prefix },
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const reducer = handleActions(
  {
    START: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      todos: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      todos: [],
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const START_GET_TODOS = `${prefix}/START_GET_TODOS`;
const START_MODIFY_TODOS = `${prefix}/START_MODIFY_TODOS`;

export const startGetTodos = createAction(
  `${START_GET_TODOS}`,
);

export const startModifyTodos = createAction(
  `${START_MODIFY_TODOS}`,
);

function* startModifyTodosSaga(action) {
  try {
    yield put(start());
    const idx = action.payload.todoId;
    const todos = yield select(
      (state) => state.content.todos,
    );
    todos[idx].complete = action.payload.reversedCheck;
    yield put(success(todos));
    //console.log(todos);
  } catch (error) {
    yield put(fail(error));
  }
}

function* startGetTodosSaga() {
  try {
    yield put(start());
    const token = yield select(
      (state) => state.userLogin.token,
    );
    const todos = yield call(
      ContentService.getTodayTodoList,
      token,
    );

    yield put(success(todos));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* contentSaga() {
  yield takeEvery(START_GET_TODOS, startGetTodosSaga);
  yield takeEvery(START_MODIFY_TODOS, startModifyTodosSaga);
}

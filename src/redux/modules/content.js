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

export const startGetTodos = createAction(
  `${START_GET_TODOS}`,
);

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
}

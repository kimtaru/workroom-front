import UserLoginService from '../../services/UserLoginService';
import { put, call, takeLeading } from 'redux-saga/effects';
import {
  createActions,
  handleActions,
  createAction,
} from 'redux-actions';

const prefix = 'workroom-front/userLogin';

const { check, fail } = createActions('CHECK', 'FAIL', {
  prefix,
});

const initialState = {
  token: null,
  pwdExactCheck: true,
  acctExistCheck: true,
  error: null,
};

const reducer = handleActions(
  {
    CHECK: (state, action) => ({
      ...initialState,
      error: null,
      acctExistCheck: action.payload,
    }),
    FAIL: (state, action) => ({
      ...initialState,
      error: action.payload,
      acctExistCheck: true,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

//SAGA

const CHECK_ACCOUNT = `${prefix}/CHECK_ACCOUNT`;

export const checkAccount = createAction(
  CHECK_ACCOUNT,
  (account) => ({
    account,
  }),
);

function* startCheckAccountSaga(action) {
  const { account } = action.payload;
  try {
    const acctExistCheck = yield call(
      UserLoginService.checkAcct,
      account,
    );
    yield put(check(acctExistCheck));
    return 'return 되었다.';
  } catch (error) {
    yield put(fail(error));
  }
}

export function* userLoginSaga() {
  yield takeLeading(CHECK_ACCOUNT, startCheckAccountSaga);
}

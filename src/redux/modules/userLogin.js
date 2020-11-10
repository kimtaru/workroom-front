import UserLoginService from '../../services/UserLoginService';
import {
  put,
  call,
  takeLeading,
  select,
} from 'redux-saga/effects';
import {
  createActions,
  handleActions,
  createAction,
} from 'redux-actions';
import { push } from 'connected-react-router';

const prefix = 'workroom-front/userLogin';

const {
  checkAcct,
  checkPwd,
  start,
  success,
  fail,
} = createActions(
  'CHECK_ACCT',
  'CHECK_PWD',
  'START',
  'SUCCESS',
  'FAIL',
  {
    prefix,
  },
);

const initialState = {
  token: null,
  pwdExactCheck: true,
  acctExistCheck: true,
  error: null,
};

const reducer = handleActions(
  {
    CHECK_ACCT: (state, action) => ({
      ...state,
      error: null,
      acctExistCheck: action.payload,
    }),
    CHECK_PWD: (state, action) => ({
      ...state,
      pwdExactCheck: action.payload,
    }),
    START: (state) => ({
      ...state,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    FAIL: (state, action) => ({
      ...state,
      error: action.payload,
      acctExistCheck: true,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

//SAGA

const AUTH_AND_LOGIN = `${prefix}/AUTH_AND_LOGIN`;
const AUTH_AND_LOGOUT = `${prefix}/AUTH_AND_LOGOUT`;

export const authAndLogin = createAction(
  AUTH_AND_LOGIN,
  (account, password) => ({
    account,
    password,
  }),
);

export const authAndLogout = createAction(AUTH_AND_LOGOUT);

function* startAuthAndLoginSaga(action) {
  const { account, password } = action.payload;

  try {
    const acctExistCheck = yield call(
      UserLoginService.checkAccount,
      //account 체크를 먼저 실행하고, 계정 유무에 따라 T/F를 반환한다.
      account,
    );
    yield put(checkAcct(acctExistCheck));

    if (acctExistCheck) {
      yield put(start());
      const token = yield call(
        UserLoginService.userLogin,
        account,
        password,
      );

      if (token !== null) {
        UserLoginService.saveToken(token);
        yield put(success(token));
        yield put(push('/'));
      } else {
        yield put(checkPwd(false));
      }
    }
  } catch (error) {
    yield put(fail(error));
  }
}

export function* startAuthAndLogoutSaga() {
  const token = yield select(
    (state) => state.userLogin.token,
  );
  console.log('토큰확인', token);
  UserLoginService.removeToken();
  yield put(success(null));
  yield put(push('/login'));
  try {
    yield call(UserLoginService.userLogout, token);
  } catch (error) {}
}

export function* userLoginSaga() {
  yield takeLeading(AUTH_AND_LOGIN, startAuthAndLoginSaga);
  yield takeLeading(
    AUTH_AND_LOGOUT,
    startAuthAndLogoutSaga,
  );
}

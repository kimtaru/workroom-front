import { all } from 'redux-saga/effects';
import { userLoginSaga } from '../modules/userLogin';

export default function* rootSaga() {
  yield all([userLoginSaga()]);
}

import { all } from 'redux-saga/effects';
import { userLoginSaga } from '../modules/userLogin';
import { contentSaga } from '../modules/content';

export default function* rootSaga() {
  yield all([userLoginSaga(), contentSaga()]);
}

import { all } from 'redux-saga/effects';
import { userLoginSaga } from '../modules/userLogin';
import { todosSaga } from '../modules/todos';

export default function* rootSaga() {
  yield all([userLoginSaga(), todosSaga()]);
}

import { all } from 'redux-saga/effects';
import { userLoginSaga } from '../modules/userLogin';
import { todosSaga } from '../modules/todos';
import { sampleSaga } from '../modules/sample';

export default function* rootSaga() {
  yield all([userLoginSaga(), todosSaga(), sampleSaga()]);
}

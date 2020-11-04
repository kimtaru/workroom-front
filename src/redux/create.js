import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/middlewares/saga';
import reducer from './modules/reducer';
import UserLoginService from '../services/UserLoginService';

export const history = createBrowserHistory();

export default function create() {
  const sagaMiddleware = createSagaMiddleware();
  const token = UserLoginService.getToken();

  const preloadedState = {
    userLogin: {
      token: token,
      pwdExactCheck: true,
      acctExistCheck: true,
      error: null,
    },
  };

  const store = createStore(
    reducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './userLogin';
import sider from './sider';
import todos from './todos';

const reducer = (history) =>
  combineReducers({
    userLogin,
    sider,
    todos,
    router: connectRouter(history),
  });

export default reducer;

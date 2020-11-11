import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './userLogin';
import sider from './sider';

const reducer = (history) =>
  combineReducers({
    userLogin,
    sider,
    router: connectRouter(history),
  });

export default reducer;

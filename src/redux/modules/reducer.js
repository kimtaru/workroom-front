import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './userLogin';
import sider from './sider';
import content from './content';

const reducer = (history) =>
  combineReducers({
    userLogin,
    sider,
    content,
    router: connectRouter(history),
  });

export default reducer;

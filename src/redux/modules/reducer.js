import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './userLogin';

const reducer = (history) =>
  combineReducers({
    userLogin,
    router: connectRouter(history),
  });

export default reducer;

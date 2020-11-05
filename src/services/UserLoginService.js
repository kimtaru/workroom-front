import axios from 'axios';

const LOCALSTORAGE_KEY = 'token';
const API_URL = 'url';

export default class UserLoginService {
  static getToken() {
    return localStorage.getItem(LOCALSTORAGE_KEY);
  }
  static saveToken(token) {
    return localStorage.setItem(LOCALSTORAGE_KEY, token);
  }
  static removeToken() {
    return localStorage.removeItem(LOCALSTORAGE_KEY);
  }
  static checkAccount(account) {
    if (account === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  static userLogin(account, password) {
    if (account === 'admin' && password === 'vmfnsk91') {
      return 'token';
    } else {
      return null;
    }
  }
}

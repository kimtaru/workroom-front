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
  static checkAcct(account) {
    if (account === 'kimtaru2@gmail.com') {
      return true;
    } else {
      return false;
    }
  }
}

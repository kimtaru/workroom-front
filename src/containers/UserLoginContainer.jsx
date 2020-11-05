import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLoginComp from '../components/UserLoginComp';
import { authAndLogin } from '../redux/modules/userLogin';

export default function UserLoginContainer() {
  const {
    acctExistCheck,
    pwdExactCheck,
    error,
  } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const userLogin = useCallback(
    async (account, password) => {
      dispatch(authAndLogin(account, password));
    },
    [dispatch],
  );
  return (
    <UserLoginComp
      userLogin={userLogin}
      acctExistCheck={acctExistCheck}
      pwdExactCheck={pwdExactCheck}
      error={error}
    />
  );
}

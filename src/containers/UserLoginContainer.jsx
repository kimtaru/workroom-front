import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLoginComp from '../components/UserLoginComp';
import { checkAccount } from '../redux/modules/userLogin';

export default function UserLoginContainer() {
  const {
    acctExistCheck,
    pwdExactCheck,
    error,
  } = useSelector((state) => state.userLogin);
  //console.log('state가 잘 오나?', acctExistCheck);
  //console.log('state가 잘 오나2?', pwdExactCheck);
  const dispatch = useDispatch();
  const findAccount = useCallback(async (account) => {
    dispatch(checkAccount(account));
  });
  return (
    <UserLoginComp
      findAccount={findAccount}
      acctExistCheck={acctExistCheck}
      pwdExactCheck={pwdExactCheck}
      error={error}
    />
  );
}

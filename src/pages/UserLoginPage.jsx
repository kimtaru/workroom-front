import React from 'react';
import UserLoginContainer from '../containers/UserLoginContainer';
import useAuth from '../hooks/useAuth';
import '../styles/userLogin.scss';

export default function UserLoginPage() {
  useAuth(false);
  return <UserLoginContainer />;
}

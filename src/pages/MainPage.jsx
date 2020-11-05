import React from 'react';
import useAuth from '../hooks/useAuth';
import MainContainer from '../containers/MainContainer';
import '../styles/mainPage.scss';

export default function MainPage() {
  useAuth(true);
  return (
    <div>
      <MainContainer />
    </div>
  );
}

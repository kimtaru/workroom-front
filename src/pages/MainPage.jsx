import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';

import '../styles/mainPage.scss';
import { Layout } from 'antd';

import HomeContainer from '../containers/HomeContainer';
import ReservationContainer from '../containers/ReservationContainer';
import TestContainer from '../containers/TestContainer';
import SiderContainer from '../containers/SiderContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

export default function MainPage() {
  const { home, reservation, test } = useSelector(
    (state) => state.sider,
  );

  useAuth(true);
  return (
    <Layout
      style={{
        margin: '0 auto 0 auto',
        maxWidth: 1680,
      }}
    >
      <SiderContainer />
      <Layout>
        <HeaderContainer />
        {/* content */}
        {home && <HomeContainer />}
        {reservation && <ReservationContainer />}
        {test && <TestContainer />}
        <FooterContainer />
      </Layout>
    </Layout>
  );
}

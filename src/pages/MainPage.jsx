import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import MyProfile from '../components/MyProfile';
import MainContainer from '../containers/MainContainer';
import { Layout, Menu } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import '../styles/mainPage.scss';
import styled from 'styled-components';

const { Header, Footer, Sider, Content } = Layout;

export default function MainPage() {
  const [collapsed, setCollapsed] = useState(false);
  //-----STATE로 대체할 것
  const userName = 'Frank Kim';
  const userPosition = 'Web Developer';
  //---------------------
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  useAuth(true);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: '#f5f5f5',
        }}
        //onCollapse={toggle}
      >
        {/* 로고 디자인 파일 적용하기 */}
        {collapsed ? null : (
          <div className="profile-div">
            <MyProfile
              userName={userName}
              userPosition={userPosition}
            />
          </div>
        )}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgroundColor: 'white',
          }}
        >
          {collapsed ? (
            <div className="toggleArrow" onClick={toggle}>
              <ArrowRightOutlined
                style={{
                  marginLeft: 10,
                  color: 'black',
                }}
              />
            </div>
          ) : (
            <div className="toggleArrow" onClick={toggle}>
              <ArrowLeftOutlined
                style={{
                  marginLeft: 10,
                  color: 'black',
                }}
              />
            </div>
          )}
        </Header>
        <Content
          style={{
            //margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#ffffff',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

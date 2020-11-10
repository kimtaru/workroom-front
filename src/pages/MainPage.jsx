import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../hooks/useAuth';
import MyProfile from '../components/MyProfile';
import MainContainer from '../containers/MainContainer';
import { Dropdown, Layout, Menu } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DownOutlined,
} from '@ant-design/icons';

import '../styles/mainPage.scss';
import styled from 'styled-components';
import { authAndLogout } from '../redux/modules/userLogin';

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
  const dispatch = useDispatch();
  const userLogout = useCallback(() => {
    dispatch(authAndLogout());
  }, [dispatch]);

  const myInfoClickEvent = ({ key }) => {
    switch (key) {
      case '1':
        alert('1');
        break;
      case '2':
        //alert('2');
        userLogout(); //로그아웃하기
        break;
      default:
        break;
    }
  };
  const myInfo = (
    <Menu onClick={myInfoClickEvent}>
      <Menu.Item key="1">개인정보 수정</Menu.Item>
      <Menu.Item key="2">로그아웃</Menu.Item>
    </Menu>
  );
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
          <div className="header-div">
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
            <div className="mini-photo" />

            <Dropdown overlay={myInfo} style={{}}>
              <a
                className="MyInfo"
                onClick={(e) => e.preventDefault()}
              >
                {userName}
                <DownOutlined
                  style={{
                    marginLeft: 5,
                  }}
                />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            //margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#ffffff',
          }}
        ></Content>
      </Layout>
    </Layout>
  );
}

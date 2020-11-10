import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../hooks/useAuth';
import MyProfile from '../components/MyProfile';

import { Dropdown, Layout, Menu } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DownOutlined,
  ScheduleOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';

import '../styles/mainPage.scss';

import { authAndLogout } from '../redux/modules/userLogin';
import SiderMenuItem from '../components/SiderMenuItem';

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
      case 'editInfo':
        alert('1');
        break;
      case 'logout':
        //alert('2');
        userLogout(); //로그아웃하기
        break;
      default:
        break;
    }
  };
  const myInfo = (
    <Menu onClick={myInfoClickEvent}>
      <Menu.Item key="editInfo">개인정보 수정</Menu.Item>
      <Menu.Item key="logout">로그아웃</Menu.Item>
    </Menu>
  ); // 상단 user 상태바 dropdown menu

  useAuth(true);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          paddingBottom: 60,
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
        {/* menubar db에서 관리 나중에 map으로 출력 */}
        <SiderMenuItem
          collapsed={collapsed}
          title="Schedule"
          icon={
            <ScheduleOutlined style={{ fontSize: 25 }} />
          }
        />
        <SiderMenuItem
          collapsed={collapsed}
          title="Reservation"
          icon={
            <CarryOutOutlined style={{ fontSize: 25 }} />
          }
        />
        <SiderMenuItem
          collapsed={collapsed}
          title="Reservation"
          icon={
            <CarryOutOutlined style={{ fontSize: 25 }} />
          }
        />
        <SiderMenuItem
          collapsed={collapsed}
          title="Reservation"
          icon={
            <CarryOutOutlined style={{ fontSize: 25 }} />
          }
        />
        <SiderMenuItem
          collapsed={collapsed}
          title="Reservation"
          icon={
            <CarryOutOutlined style={{ fontSize: 25 }} />
          }
        />
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

            <Dropdown overlay={myInfo}>
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
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
}

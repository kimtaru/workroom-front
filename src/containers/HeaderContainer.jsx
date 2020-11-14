import React, { useCallback } from 'react';
import { Layout, Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { authAndLogout } from '../redux/modules/userLogin';
import Search from '../components/Search';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
export default function HeaderContainer() {
  const userName = 'Frank Kim';

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
  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: '#FAFAFA',
        minWidth: 1000,
      }}
    >
      <div className="header-div">
        <Search />
        <div className="mini-photo" />

        <Dropdown overlay={myInfo}>
          <a
            href="#;"
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
  );
}

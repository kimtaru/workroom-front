import React, { useState } from 'react';
import { Layout } from 'antd';

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import SiderMenuItemContainer from '../containers/SiderMenuItemContainer';
import MyProfile from '../components/MyProfile';

const { Sider } = Layout;

export default function SiderContainer() {
  //-----STATE로 대체할 것
  const userName = 'Frank Kim';
  const userPosition = 'Web Developer';
  const [collapsed, setCollapsed] = useState(false);
  const [borderWeight, setBorderWeight] = useState('7px');
  //---------------------
  const toggle = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      setBorderWeight('7px');
    } else {
      setBorderWeight('3px');
    }
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: '#FAFAFA',
        padding: 20,
        paddingBottom: 60,
        borderRight: borderWeight + ' solid #E6E4E4',
      }}
      //onCollapse={toggle}
    >
      <div onDoubleClick={toggle} className="toFixed">
        {collapsed ? (
          <ArrowRightOutlined
            style={{ fontSize: 24, marginLeft: 10 }}
            onClick={toggle}
          />
        ) : (
          <ArrowLeftOutlined
            style={{ fontSize: 24, marginLeft: 130 }}
            onClick={toggle}
          />
        )}

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
        <SiderMenuItemContainer collapsed={collapsed} />
      </div>
    </Sider>
  );
}

// {collapsed ? (
//     <div className="toggleArrow" onClick={toggle}>
//       <ArrowRightOutlined
//         style={{
//           marginLeft: 10,
//           color: 'black',
//           marginBottom: 20,
//         }}
//       />
//     </div>
//   ) : (
//     <div className="toggleArrow" onClick={toggle}>
//       <ArrowLeftOutlined
//         style={{
//           marginLeft: 10,
//           color: 'black',
//         }}
//       />
//     </div>
//   )}

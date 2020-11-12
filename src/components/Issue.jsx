import React from 'react';
import { Col } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

export default function Issue() {
  return (
    <Col
      style={{
        minWidth: '200px',
        paddingBottom: '10px',
      }}
      span="6"
    >
      <div id="Issue">
        <div className="attendance-list">
          <TeamOutlined
            style={{
              fontSize: 23,
            }}
          />
        </div>
        <div className="throwerPhoto" />
        <div className="throwerName">David</div>
        <div className="throwerDept">Online Marketing</div>
        <div className="agenda">
          "To report about marketing's team performance
          2021"
        </div>
        <div className="detail-issue">DETAIL</div>
        <div className="throwDate">2020-11-12</div>
        <div className="join">JOIN</div>
        <div className="priority">routine</div>
      </div>
    </Col>
  );
}

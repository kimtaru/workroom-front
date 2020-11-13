import React from 'react';
import { Col } from 'antd';
import TodayList from '../components/TodayList';

export default function TodoContainer() {
  return (
    <Col
      flex="1 250px"
      style={
        {
          //border: '1px solid black',
        }
      }
    >
      <div id="Container">
        <span className="title">Today's List</span>
        <TodayList />
      </div>
    </Col>
  );
}

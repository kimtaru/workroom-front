import React from 'react';
import { Row, Col } from 'antd';
export default function TodayList() {
  return (
    <div className="compDiv">
      <Row>
        <Col span={12}>
          <div className="graph">a</div>
        </Col>
        <Col span={12}>
          <div className="checkList">b</div>
        </Col>
      </Row>
    </div>
  );
}

import React from 'react';
import { Row, Col } from 'antd';
import Issue from '../components/Issue';

export default function IssueContainer() {
  // 카드는 4장까지 출력
  return (
    <Col flex="3 200px">
      <h4>Issues</h4>
      <Row>
        <Issue />
        <Issue />
        <Issue />
        <Issue />
      </Row>
    </Col>
  );
}

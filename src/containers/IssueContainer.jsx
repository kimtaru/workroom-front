import React from 'react';
import { Row, Col } from 'antd';
import Issue from '../components/Issue';

export default function IssueContainer() {
  return (
    <Row>
      <Issue />
      <Issue />
      <Issue />
      <Issue />
    </Row>
  );
}

import React from 'react';
import { Layout, Row, Col } from 'antd';
import IssueContainer from '../containers/IssueContainer';

export default function HomeContainer() {
  const { Content } = Layout;

  return (
    <Content
      style={{
        padding: 24,
        minHeight: 280,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Row>
        <IssueContainer />
        <Col
          flex="1 250px"
          style={{
            border: '1px solid black',
          }}
        >
          개발중(today's list..)
        </Col>
      </Row>
    </Content>
  );
}

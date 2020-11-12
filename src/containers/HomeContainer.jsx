import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import IssueContainer from '../containers/IssueContainer';

export default function HomeContainer() {
  const { Content } = Layout;
  return (
    <Content
      style={{
        //margin: '24px 16px',
        padding: 24,
        minHeight: 280,

        backgroundColor: '#ffffff',
      }}
    >
      <Row>
        <Col
          flex="3 200px"
          style={{
            border: '1px solid black',
          }}
        >
          <h4>title</h4>
          <IssueContainer />
        </Col>
        <Col
          flex="1 250px"
          style={{
            border: '1px solid black',
          }}
        >
          개발중
        </Col>
      </Row>
    </Content>
  );
}

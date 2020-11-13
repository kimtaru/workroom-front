import React from 'react';
import { Layout, Row } from 'antd';
import IssueContainer from '../containers/IssueContainer';
import TodoContainer from '../containers/TodoContainer';

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
        <TodoContainer />
      </Row>
    </Content>
  );
}

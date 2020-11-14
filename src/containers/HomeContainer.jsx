import React from 'react';
import { Layout, Row } from 'antd';
import IssueContainer from '../containers/IssueContainer';
import TodayListContainer from '../containers/TodayListContainer';

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
        <TodayListContainer />
      </Row>
    </Content>
  );
}

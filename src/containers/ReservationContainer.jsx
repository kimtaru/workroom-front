import React from 'react';
import { Layout } from 'antd';

export default function ReservationContainer() {
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
      <h1>ReservationContainer</h1>
    </Content>
  );
}

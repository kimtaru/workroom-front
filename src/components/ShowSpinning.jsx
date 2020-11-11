import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function ShowSpinning() {
  const antdIcon = (
    <LoadingOutlined style={{ fontSize: 30 }} spin />
  );
  return (
    <div id="ShowSpinning">
      <Spin indicator={antdIcon} />
    </div>
  );
}

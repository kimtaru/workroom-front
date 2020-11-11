import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Search() {
  return (
    <div id="Search">
      <Input
        type="large"
        style={{
          height: 45,
          borderRadius: 25,
        }}
        prefix={
          <SearchOutlined
            style={{
              marginRight: 10,
              fontSize: 20,
            }}
          />
        }
      />
    </div>
  );
}

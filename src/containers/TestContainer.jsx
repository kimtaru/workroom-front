import React, { useCallback } from 'react';
import { Layout } from 'antd';
import TestComponent from '../components/TestComponent';
import { useSelector, useDispatch } from 'react-redux';
import { startGetSample } from '../redux/modules/sample';

export default function TestContainer() {
  const { Content } = Layout;
  const { sample, loading, error } = useSelector(
    (state) => state.sample,
  );

  const dispatch = useDispatch();

  const getSample = useCallback(() => {
    dispatch(startGetSample());
  }, [dispatch]);

  return (
    <Content
      style={{
        //margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        backgroundColor: '#ffffff',
      }}
    >
      <TestComponent
        sample={sample}
        loading={loading}
        error={error}
        getSample={getSample}
      />
    </Content>
  );
}

import React from 'react';
import styled from 'styled-components';

const SiderMenu = styled.div``;
const Icon = styled.div`
  width: 30px;
  display: inline-block;
  margin-left: 8px;
`;
const Title = styled.div`
  width: 100px;
  display: inline-block;
  margin-left: 5px;
`;
export default function SiderMenuItem({
  collapsed,
  title,
  icon,
}) {
  return (
    <div id="SiderMenuItem" onClick={textPlay}>
      <Icon>{icon}</Icon>
      {collapsed ? '' : <Title>{title}</Title>}
    </div>
  );

  function textPlay() {
    console.log('aaa');
  }
}

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SiderMenu = styled.div``;
const Icon = styled.div`
  width: 30px;
  display: inline-block;
  margin-left: 15px;
  text-align: center;
  color: ${(props) => props.active && 'blue'};
  font-weight: ${(props) => props.active && '500'};
`;
const Title = styled.div`
  width: 100px;
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  margin-top: 2px;
  color: ${(props) => props.active && 'blue'};
  font-weight: ${(props) => props.active && '500'};
`;
export default function SiderMenuItem({
  collapsed,
  title,
  icon,
  active,
  clickEvent,
}) {
  return (
    <div id="SiderMenuItem" onClick={clickEvent}>
      <Icon active={active}>{icon}</Icon>
      {collapsed ? (
        ''
      ) : (
        <Title active={active}>{title}</Title>
      )}
    </div>
  );
}

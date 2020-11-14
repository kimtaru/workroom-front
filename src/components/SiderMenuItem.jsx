import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  width: 30px;
  display: inline-block;
  margin-top: ${(props) => props.collapsed && '20px'};
  margin-left: ${(props) =>
    props.collapsed ? '5px' : '15px'};
  text-align: center;
  color: ${(props) => props.active && '#337AFF'};
  font-weight: ${(props) => props.active && '500'};
`;
const Title = styled.div`
  width: 100px;
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  margin-top: 2px;
  color: ${(props) => props.active && '#337AFF'};
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
      <Icon active={active} collapsed={collapsed}>
        {icon}
      </Icon>
      {collapsed ? (
        ''
      ) : (
        <Title active={active}>{title}</Title>
      )}
    </div>
  );
}

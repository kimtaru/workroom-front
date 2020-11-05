import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled(Link)`
  float: left;
  margin-top: 25px;
  margin-left: 50px;
  text-decoration: none;
`;
const LogOut = styled(Link)`
  float: right;
  margin-top: 25px;
  margin-right: 60px;
  text-decoration: none;
`;

export default function NavComp() {
  return <div></div>;
}

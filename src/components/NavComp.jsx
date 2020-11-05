import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled(Link)`
  color: black;
  text-decoration: none;
`;
const LogOut = styled(Link)`
  float: right;
  margin-top: 25px;
  margin-right: 60px;
  text-decoration: none;
`;

export default function NavComp() {
  return (
    <div id="NavComp">
      <div className="photo"></div>
      <div className="name">Kim Jinsol</div>
      <div className="job">Marketing Director</div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
      <div className="menuItem">
        <MenuItem>Overview</MenuItem>
      </div>
    </div>
  );
}

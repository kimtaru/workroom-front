import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) =>
    props.type === 'LightToDark' ? 'white' : 'black'};
  color: ${(props) =>
    props.type === 'LightToDark' ? 'black' : 'white'};
  &:hover {
    transition: 0.3s ease;
    background-color: ${(props) =>
      props.type === 'LightToDark' ? 'black' : 'white'};
    color: ${(props) =>
      props.type === 'LightToDark' ? 'white' : 'black'};
  }
`;

function UserLoginComp() {
  return (
    <div id="UserLoginComp">
      <h1>[ WORKROOM ]</h1>
      <input type="text" placeholder="E-mail Account" />
      <div className="notice account">Wrong Account</div>
      <input type="password" placeholder="Password" />
      <div className="notice password">Wrong Password</div>
      <Button type="LightToDark">LOGIN</Button>
      <Button>JOIN</Button>
      <p>I forgot my password</p>
      {/* 페이지 만들고 div -> Link 로 개발할 것 */}
    </div>
  );
}

export default UserLoginComp;

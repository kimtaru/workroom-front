import React, { useRef } from 'react';
import styled from 'styled-components';
import ShowSpinning from '../components/ShowSpinning';

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

function UserLoginComp({
  acctExistCheck,
  pwdExactCheck,
  userLogin,
  loading,
}) {
  const accountRef = useRef();
  const passwordRef = useRef();
  const enterKeyEvent = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };
  return (
    <div id="UserLoginComp">
      {loading && <ShowSpinning />}
      <h1>[ WORKROOM ]</h1>

      <input
        type="text"
        placeholder="E-mail Account"
        ref={accountRef}
      />
      <div className="notice account">
        {acctExistCheck || 'wrong account'}
      </div>
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef}
        onKeyPress={enterKeyEvent}
      />
      <div className="notice password">
        {pwdExactCheck || 'wrong password'}
      </div>
      <Button type="LightToDark" onClick={login}>
        LOGIN
      </Button>
      <Button onClick={helpTest}>JOIN</Button>
      {/* 회원가입은 서버 구축 후 개발 예정 */}
      <p>I forgot my password</p>
      {/* 페이지 만들고 Link 로 개발할 것 */}
    </div>
  );

  function helpTest() {
    alert('서버 구축 후 개발 예정입니다.');
  }
  function login() {
    const account = accountRef.current.value;
    const password = passwordRef.current.value;
    userLogin(account, password);
  }
}

export default UserLoginComp;

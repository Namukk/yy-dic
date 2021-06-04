import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  margin: 15px;
`;

const UserLink = styled(Link)`
  padding: 0 10px;
  border-right: 1px solid black;
  &:last-child {
    border-right: none;
  }
`;

const UserInfo = () => {
  // isLoggedIn props로 로그인 되었을 때와 아닐 때 다르게 보일 예정
  return (
    <UserInfoWrapper>
      <UserLink to="/login">Login</UserLink>
      <UserLink to="/signup">join</UserLink>
    </UserInfoWrapper>
  );
};

export default UserInfo;
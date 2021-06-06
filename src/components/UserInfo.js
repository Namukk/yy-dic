import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../fbase";
import refresh from "../Functions/Refresh";

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

const UserInfo = ({ isLoggedIn, userObj }) => {
  // isLoggedIn props로 로그인 되었을 때와 아닐 때 다르게 보일 예정
  const onLogOutClick = () => {
    authService.signOut();
    refresh();
  };
  return (
    <UserInfoWrapper>
      {isLoggedIn ? (
        <>
          <UserLink to="/profile">Mypage</UserLink>
          <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
            Log Out
          </span>
        </>
      ) : (
        <UserLink to="/signup">join</UserLink>
      )}
      {/* <UserLink to="/login">Login</UserLink> */}
    </UserInfoWrapper>
  );
};

export default UserInfo;

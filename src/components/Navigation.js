import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0;
  justify-content: space-between;
  /* position: fixed; */
`;

const Span = styled.span`
  margin-left: 15px;
  font-size: 30px;
`;

const List = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  flex-direction: row;
  margin-right: 20px;
  margin-left: 0;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <Span>MoreUget語</Span>
      <List>
        <Li>
          <Link to="/dic">사전</Link>
        </Li>
        <Li>
          <Link to="/com">커뮤니티</Link>
        </Li>
        <Li>
          <Link to="/login">로그인</Link>
        </Li>
      </List>
    </NavContainer>
  );
};

export default Navigation;

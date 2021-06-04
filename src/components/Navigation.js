import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: grey;
  height: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;

const List = styled.ul`
  width: 50vw;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <List>
        <li>
          <Link to="/dic">사전</Link>
        </li>
        <li>
          <Link to="/com">커뮤니티</Link>
        </li>
      </List>
    </NavContainer>
  );
};

export default Navigation;

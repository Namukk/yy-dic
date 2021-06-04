import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 95vw;
  background-color: gray;
  font-size: 18px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px auto;
  /* position: fixed; */
`;

// const Span = styled.span`
//   margin-left: 15px;
//   font-size: 30px;
// `;

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
      <List>
        <Li>
          <Link to="/dic">사전</Link>
        </Li>
        <Li>
          <Link to="/com">커뮤니티</Link>
        </Li>
      </List>
    </NavContainer>
  );
};

export default Navigation;

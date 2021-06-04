import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopWrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TopForm = styled.form`
  display: flex;
  height: 30px;
  width: 100%;
  input {
    width: 75%;
  }
`;

const LogoImage = styled.img`
  width: 60px;
  margin: 0 5vw 0 5vw;
`;

const TestLogo = styled(Link)`
  width: 150px;
  margin: 0 5vw 0 5vw;
  font-size: 20px;
`;

const TopInput = () => {
  return (
    <TopWrapper>
      {/* <LogoImage src="https://github.com/Namukk/yy-dic/blob/master/src/logo.png?raw=true" alt="logo"/> */}
      <TestLogo Link to="/">MoreUget語</TestLogo>
      <TopForm action="">
        <select name="select" >
          <option value="all">통합</option>
          <option value="one">분류1</option>
          <option value="twe">분류2</option>
        </select>
        <input type="text" p/>
        <button type="button">검색</button>
      </TopForm>
    </TopWrapper>
  );
};

export default TopInput;
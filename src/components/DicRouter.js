import React from 'react';
import TopInput from "./TopInput";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import DicForm from './DicForm';
import { Link } from 'react-router-dom';


const DicRouter = ({ match }) => {
  const { id } = match.params

  if (id === 'form') {
    return (
      <>
        <TopInput />
        <UserInfo />
        <Navigation />
        <DicForm />
      </>
    );
  } else if (id === '1') {
    return (
      <>
        <TopInput />
        <UserInfo />
        <Navigation />
        <div>포켓몬 단어 페이지</div>
      </>
    );
  } else if (id === '2') {
    return (
      <>
        <TopInput />
        <UserInfo />
        <Navigation />
        <div>코난 단어 페이지</div>
      </>
    );
  } 
  return (
    <>
      <TopInput />
      <UserInfo />
      <Navigation />
      <button>
        <Link to="/dic/form">글쓰기</Link>
      </button>
      <div>사전 메인 페이지</div>
    </>
  );
};

export default DicRouter;
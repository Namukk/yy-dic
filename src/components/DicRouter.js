import React from "react";
import MakeDic from "./MakeDic";
import { Link } from "react-router-dom";

const DicRouter = ({ match }) => {
  const { id } = match.params;
  if (id === "form") {
    return (
      <>
        <MakeDic />
      </>
    );
  } else if (id === "1") {
    return (
      <>
        <div>포켓몬 단어 페이지</div>
      </>
    );
  } else if (id === "2") {
    return (
      <>
        <div>코난 단어 페이지</div>
      </>
    );
  }
  return (
    <>
      <button>
        <Link to="/dic/form">글쓰기</Link>
      </button>
      <div>사전 메인 페이지</div>
    </>
  );
};

export default DicRouter;

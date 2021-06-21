import React from "react";
import MakeDic from "./MakeDic";
import { Link } from "react-router-dom";
import VocaPage from "../pages/VocaPage";

const DicRouter = ({ match }) => {
  const { id } = match.params;
  if (id === "form") {
    return <MakeDic />

  } else if (!isNaN(id)) {
    return <VocaPage vocaId={id}/>
        
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

import React from "react";
import MakeDic from "./MakeDic";
import { Link } from "react-router-dom";
import VocaPage from "../pages/VocaPage";

const DicRouter = ({ match, vocaId }) => {
  const { id } = match.params;
  if (id === "form") {
    return <MakeDic vocaId={vocaId} />;
  } else if (!isNaN(id)) {
    return <VocaPage vocaId={vocaId} />;
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

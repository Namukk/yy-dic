import React, { useState } from 'react';
import { dbService } from "../fbase";

const DicForm = () => {
  const [vocaId, setVocaId] = useState("1");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(vocaId);
    console.log(title);
    console.log(content);
  }

  const onChange = (event) => {
    const {
      target: { id, value },
    } = event;
    console.log(value);
    if (id === "select") {
      setVocaId(value);
    } else if (id === "title") {
      setTitle(value);
    } else if (id === "content") {
      setContent(value)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="select">분류</label>
      <select id="select" onChange={onChange}>
        <option value="1">포켓몬</option>
        <option value="2">코난</option>
        <option value="3">디지몬</option>
      </select>
      <br />
      <label for="title">단어</label>
      <input id ="title" type="text" required placeholder="단어" onChange={onChange}/>
      <br />
      <label for="content">단어의 뜻</label>
      <textarea id="content" placeholder="단어의 뜻" maxLength="100" onChange={onChange}/>
      <br />
      <button>작성 완료</button>
    </form>
  );
};

export default DicForm;
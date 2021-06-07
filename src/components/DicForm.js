import React from 'react';

const DicForm = () => {
  return (
    <form>
      <label for="select">분류</label>
      <select id="select">
        <option value="1">포켓몬</option>
        <option value="2">코난</option>
        <option value="3">디지몬</option>
      </select>
      <br />
      <label for="title">단어</label>
      <input id ="title" type="text" required placeholder="단어" />
      <br />
      <label for="content">단어의 뜻</label>
      <textarea id="content" placeholder="단어의 뜻" maxLength="100"/>
      <br />
      <button>작성 완료</button>
    </form>
  );
};

export default DicForm;
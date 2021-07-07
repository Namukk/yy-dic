import React, { useState, useEffect } from 'react';
import { dbService } from '../../fbase';

import { Table } from './style';

const VocaPage = ({ vocaId }) => {
  const [words, setWords] = useState([]);
  const getWords = async () => {
    const dbWords = await dbService.collection("words").get();
    dbWords.forEach((document) => {
      if (document.data().vocaId === vocaId){
        const wordsObj = {
          ...document.data(),
          id: document.id,
        };
        setWords((prev) => [wordsObj, ...prev]);
      }
    });
    console.log(words)
  };

  useEffect(() => {
    getWords();
  }, []);

  const getEditDate = (timeStamp) => {
    let date = new Date(timeStamp)
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
  }

  return (
    <div>
      <div>{vocaId} 를 보고있습니다.</div>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>단어</th>
            <th>뜻</th>
            <th>편집일</th>
            <th>집필자</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, i) => (
            <tr key={word.id}>
              <td>{i + 1}</td> 
              <td>{word.voca[0].name}</td>
              <td>{word.voca[0].meaning}</td>
              <td>{getEditDate(word.createdAt)}</td>
              <td>test</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VocaPage;
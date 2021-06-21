import React, { useState, useEffect } from 'react';
import { dbService } from '../../fbase';

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

  return (
    <div>
      <div>{vocaId} 를 보고있습니다.</div>
      {words.map((word) => (
        <div key={word.id}>
          <h1 style={{fontSize:"25px"}}>{word.voca[0].name}</h1>
          <p style={{marginBottom:"20px"}}>{word.voca[0].meaning}</p>
        </div>
      ))}
    </div>
  );
};

export default VocaPage;
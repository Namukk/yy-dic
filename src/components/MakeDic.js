import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  transform: translateY(15vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  label {
    width: 400px;
    text-align: left;
    margin: 0 0 15px 10px;
  }
  input,
  select,
  textarea {
    width: 400px;
    height: 40px;
    padding: 5px;
    margin-bottom: 20px;
    border: 3px black solid;
    border-radius: 5px;
    font-size: 16px;
  }
  textarea {
    height: 100px;
  }
  button {
    width: 150px;
    font-size: 17px;
    background: none;
    border: 3px black solid;
    border-radius: 10px;
    padding: 5px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const MakeDic = () => {
  let history = useHistory();
  // const [valueName, setValueName] = useState("");
  const [vocaId, setVocaId] = useState("포켓몬");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dics, setDics] = useState([]);

  const getDics = async () => {
    const dbDics = await dbService.collection("words").get();
    dbDics.forEach((document) => {
      setDics((prev) => [document.data(), ...prev]);
    });
  };
  useEffect(() => {
    getDics();
    // console.log(dics);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    // await dbService
    //   .collection("words")
    //   .doc(vocaId)
    //   .set({
    //     vocaId,
    //     createdAt: Date.now(),
    //     voca: [{ name: title, meaning: content }],
    //   });
    const dbDocs = dbService.collection("words").doc(vocaId);

    const vocaData = {
      [title]: { meaning: content, createdAt: Date.now() },
    };
    await dbDocs.get().then((doc) => {
      if (doc.exists) {
        // dbService.collection("words").doc(vocaId).update(vocaData, doc.data());
        dbDocs.onSnapshot((docs) => {
          dbDocs.update(vocaData, docs.data());
          console.log("Current data: ", docs.data());
          // const myObj = doc.data();
          // console.log(Object.keys(myObj));
        });
      } else {
        dbDocs.set(vocaData);
        console.log("Document data:", doc.data());
        // const myObj = doc.data();
        // console.log(Object.keys(myObj));
      }
    });
    // await dbDocs.collection(vocaId).add(vocaData);

    history.push("/");
  };

  // const onSubmitUpdate = async (event) => {
  //   event.preventDefault();
  //   const vocaData = { name: title, meaning: content };
  //   const docData = {
  //     vocaId,
  //     createdAt: Date.now(),
  //     voca: [{ name: title, meaning: content }],
  //   };
  //   await dbService.collection("words").doc(vocaId).update(docData);
  // };

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
      setContent(value);
    }
    // else if (id === "valueName") {
    //   setValueName(value);
    // }
  };
  // console.log(dics);
  return (
    <Form onSubmit={onSubmit} vocaId={vocaId}>
      <label for="select">분류</label>
      <select id="select" onChange={onChange}>
        <option value="포켓몬" id="valueName">
          포켓몬
        </option>
        <option value="코난" id="valueName">
          코난
        </option>
        <option value="디지몬" id="valueName">
          디지몬
        </option>
      </select>
      <br />
      <label for="title">단어</label>
      <input id="title" type="text" required onChange={onChange} />
      <br />
      <label for="content">단어의 뜻</label>
      <textarea id="content" maxLength="100" onChange={onChange} />
      <br />
      <button type="submit">작성 완료</button>
    </Form>
  );
};

export default MakeDic;

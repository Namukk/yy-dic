import { authService } from "../fbase";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Span = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  .authInput {
    height: 25px;
    margin-bottom: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    background: none;
    border-style: none;
    cursor: pointer;
    font-size: 15px;
  }
  a {
    font-size: 15px;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Span>
        <Form onSubmit={onSubmit} className="container">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            className="authInput"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="authInput"
          />
          <input type="submit" className="authSubmit" value="Login" />
          {error && <span className="authError">{error}</span>}
          <SocialLogin />
        </Form>
      </Span>
    </>
  );
};

export default LoginForm;

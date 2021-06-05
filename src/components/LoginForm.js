import { authService } from "../fbase";
import React, { useState } from "react";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
  margin-bottom: 50px;
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

  // const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <Span>
        <form onSubmit={onSubmit} className="container">
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
          <input
            type="submit"
            className="authInput authSubmit"
            value="Login"
            // value={newAccount ? "Create Account" : "Sign in"}
          />
          {error && <span className="authError">{error}</span>}
        </form>
        {/* <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign in" : "Create Account"}
      </span> */}
      </Span>
    </>
  );
};

export default LoginForm;

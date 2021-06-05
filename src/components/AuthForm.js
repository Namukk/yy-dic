import { authService } from "../fbase";
import React, { useState } from "react";
import { SignUpForm, InputWrapper } from "../pages/SignUp/style";
import refresh from "../Functions/Refresh";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
    } else if (name === "password2") {
      setPassword2(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if ((newAccount, password == password2)) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        refresh();
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <h2>회원정보입력</h2>
      <SignUpForm onSubmit={onSubmit}>
        <InputWrapper>
          <label for="user-id">E-mail</label>
          <input
            name="email"
            type="email"
            id="user-email-id"
            value={email}
            onChange={onChange}
            required
          />
          <button>메일중복확인</button>
        </InputWrapper>
        <InputWrapper>
          <label for="user-password">비밀번호</label>
          <input
            type="password"
            name="password"
            required
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
            minlength="8"
            maxlength="20"
          />
        </InputWrapper>
        <InputWrapper>
          <label for="user-password">비밀번호 확인</label>
          <input
            type="password"
            name="password2"
            required
            placeholder="비밀번호 확인"
            value={password2}
            onChange={onChange}
            minlength="8"
            maxlength="20"
          />
        </InputWrapper>
        <InputWrapper>
          <label for="user-nickname">닉네임</label>
          <input type="text" id="user-nickname" required placeholder="닉네임" />
          <button>중복확인</button>
        </InputWrapper>
        <button onSubmit={onSubmit}>가입하기</button>
      </SignUpForm>
      {/* <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign in" : "Create Account"}
      </span> */}
    </>
  );
};

export default AuthForm;

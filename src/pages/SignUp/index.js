import React from 'react';
import { SignUpForm, InputWrapper } from './style'

const SignUp = () => {
  return (
    <>
      <h2>회원정보입력</h2>
      <SignUpForm>
        <InputWrapper>
          <label for="user-id">ID</label>
          <input type="text" id="user-id" required placeholder="ID" minlength="4" maxlength="16"/>
          <button>중복확인</button>
        </InputWrapper>
        <InputWrapper>
          <label for="user-password">비밀번호</label>
          <input type="password" id = "user-password" required placeholder="비밀번호"minlength="8" maxlength="20"/>
        </InputWrapper>
        <InputWrapper>
          <label for="user-password">비밀번호 확인</label>
          <input type="password" id = "user-password" required placeholder="비밀번호 확인"minlength="8" maxlength="20"/>
        </InputWrapper>
        <InputWrapper>
          <label for="user-name">이름</label>
          <input type="text" id="user-name" required placeholder="이름"/>
        </InputWrapper>
        <InputWrapper>
          <label for="user-id">E-mail</label>
          <input type="text" id="user-email-id" required />
          @
          <select name="select" >
            <option value="">선택하세요</option>
            <option value="hanmail">hanmail.net</option>
            <option value="naver">naver.com</option>
            <option value="gmail">gmail.com</option>
          </select>
          <button>메일중복확인</button>
        </InputWrapper>
        <InputWrapper>
          <label for="user-nickname">닉네임</label>
          <input type="text" id="user-nickname" required placeholder="닉네임"/>
          <button>중복확인</button>
        </InputWrapper>
        
      </SignUpForm>
    </>
  );
};

export default SignUp;
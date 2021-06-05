import React from "react";
import { Redirect } from "react-router";
import AuthForm from "../../components/AuthForm";
import { SignUpForm, InputWrapper } from "./style";

const SignUp = ({isLoggedIn}) => {
  return (
  <>
    {isLoggedIn ? <Redirect to="/"/> : <AuthForm />}
    
  </>
  )
};

export default SignUp;

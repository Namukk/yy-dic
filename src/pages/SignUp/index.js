import React from "react";
import { Redirect } from "react-router";
import AuthForm from "../../components/AuthForm";

// const SignUp = ({ isLoggedIn }) => {
//   return <>{isLoggedIn ? <Redirect to="/profile" /> : <AuthForm />}</>;
// };

const SignUp = ({ isLoggedIn }) => {
  return <AuthForm />;
};

export default SignUp;

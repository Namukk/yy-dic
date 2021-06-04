import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import AppFooter from "./Footer";
import Navigation from "./Navigation";
import Main from '../pages/Main';
import TopInput from './TopInput';
import UserInfo from "./UserInfo";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
<<<<<<< HEAD
=======
        <UserInfo />
        <TopInput />
        <Navigation />
>>>>>>> 1f47fec5f6faf64568dbfb4e5b690968dc368108
        <Main />
      </Route>
      <Route path="/dic">
        <UserInfo />
        <TopInput />
        <Navigation />
        Dictionary
      </Route>
      <Route path="/com">
        <UserInfo />
        <TopInput />
        <Navigation />
        Community
      </Route>
      <Route path="/login">
        <UserInfo />
        <Login />
      </Route>
      <Route path="/signup">
        <UserInfo />
        <SignUp />
      </Route>
      <AppFooter />
    </Router>
  );
};

export default AppRouter;

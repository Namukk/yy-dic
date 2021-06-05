import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../pages/Main";
import AppFooter from "./Footer";
import TopInput from "./TopInput";
import UserInfo from "./UserInfo";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "./Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {/* {isLoggedIn && (
        <>
          <TopInput />
          <Main userObj={userObj} />
        </>
      )} */}
      <Switch>  
        <Route exact path="/">
          <UserInfo userObj={userObj} />
          <TopInput />
          <Navigation />
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
        <Route path="/profile">
          <Profile userObj={userObj} refreshUser={refreshUser} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/signup">
          <UserInfo />
          <SignUp isLoggedIn={isLoggedIn}/>
        </Route>
        
      </Switch>
      <AppFooter />
    </Router>
  );
};

export default AppRouter;

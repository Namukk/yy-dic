import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
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
        <>
          {isLoggedIn ? (
            <div>
              <Route exact path="/">
                <UserInfo userObj={userObj} />
                <TopInput />
                <Main />
              </Route>
              <Route path="/dic">
                <UserInfo />
                <TopInput />
                Dictionary
              </Route>
              <Route path="/com">
                <UserInfo />
                <TopInput />
                Community
              </Route>
              <Route path="/login">
                <UserInfo />
                <Login />
              </Route>
              <Route path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
              </Route>
              <Route path="/signup">
                <UserInfo />
                <SignUp />
              </Route>
              <AppFooter />
            </div>
          ) : (
            <>
              <Route exact path="/"></Route>
              <Redirect from="*" to="/" />
            </>
          )}
        </>
      </Switch>
    </Router>
  );
};

export default AppRouter;

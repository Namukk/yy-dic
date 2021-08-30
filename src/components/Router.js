import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import AppFooter from "./Footer";
import UserInfo from "./MainTop/UserInfo";
import MainTop from "./MainTop";
import SignUp from "../pages/SignUp";
import Profile from "./Profile";
import DicRouter from "./DicRouter";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainTop userObj={userObj} isLoggedIn={isLoggedIn} />
          <Main userObj={userObj} isLoggedIn={isLoggedIn} />
        </Route>
        <Route
          exact
          path="/dic"
          render={(props) => (
            <>
              <MainTop userObj={userObj} isLoggedIn={isLoggedIn} />{" "}
              <DicRouter match={props.match} />{" "}
            </>
          )}
        />
        <Route path="/dic/디지몬" />
        <Route path="/dic/포켓몬" />
        <Route path="/dic/코난" />
        <Route
          path="/dic/:id"
          render={(props) => (
            <>
              <MainTop userObj={userObj} isLoggedIn={isLoggedIn} />{" "}
              <DicRouter match={props.match} />{" "}
            </>
          )}
        />

        <Route path="/com">
          <MainTop userObj={userObj} isLoggedIn={isLoggedIn} />
          Community
        </Route>
        <Route path="/profile">
          <Profile
            userObj={userObj}
            refreshUser={refreshUser}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/signup">
          <UserInfo userObj={userObj} isLoggedIn={isLoggedIn} />
          <SignUp isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
      <AppFooter />
    </Router>
  );
};

export default AppRouter;

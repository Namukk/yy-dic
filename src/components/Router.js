import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppFooter from "./Footer";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Navigation />
        Home
      </Route>
      <Route path="/dic">
        <Navigation />
        Dictionary
      </Route>
      <Route path="/com">
        <Navigation />
        Community
      </Route>
      <Route path="/login">Login</Route>
      <AppFooter />
    </Router>
  );
};

export default AppRouter;

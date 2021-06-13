import React from 'react';
import UserInfo from './UserInfo';
import TopInput from './TopInput';
import Navigation from './Navigation';

const MainTop = ({ isLoggedIn, userObj, match }) => {
  console.log(match)
  return (
    <>
      <UserInfo userObj={userObj} isLoggedIn={isLoggedIn} />
      <TopInput />
      <Navigation />
    </>
  );
};

export default MainTop;
import React, { useEffect, useState } from "react";
import Router from "./components/Router";
import { authService } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid.refreshUser,
          updateProfile: (args) => user.updateProfile(args),
        });
        // setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid.refreshUser,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <Router
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;

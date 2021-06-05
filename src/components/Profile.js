import { authService, dbService } from "../fbase";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";

const Profile = ({ userObj, refreshUser, isLoggedIn }) => {
  //   const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    // history.push("/"); 6번과 10번줄을 사용해도 라우터에서 사용한 <Redirect> 태그와 같은 효과. 로그아웃해도 프로필에 남아있는 현상 해결 가능.
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  //   const getMyNweets = async () => {
  //     const ynweets = await dbService
  //       .collection("Ynweets")
  //       .where("creatorId", "==", userObj.uid)
  //       .orderBy("createdAt")
  //       .get();
  //     console.log(ynweets.docs.map((doc) => doc.data()));
  //   };

  //   useEffect(() => {
  //     getMyNweets();
  //   }, []);
  return (
    <>
      { !isLoggedIn ? <Redirect to="/"/> : 
        <div className="container">
      
        <form onSubmit={onSubmit} className="profileForm">
          <input
            onChange={onChange}
            type="text"
            autoFocus
            placeholder="Display name"
            value={newDisplayName}
            className="formInput"
          />
          <input
            type="submit"
            value="Update Profile"
            className="formBtn"
            style={{
              marginTop: 10,
            }}
          />
        </form>
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
          Log Out
        </span>
      </div>
      }
    </>
    
  );
};

export default Profile;

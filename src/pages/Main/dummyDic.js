import DbDic from "./Db";
import DicFactory from "./DicFactory";
import { dbService } from "../../fbase";
import React, { useEffect, useState } from "react";
import { HotDic, HotDicContent } from "./style";
import { faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    dbService.collection("words").onSnapshot((snapshot) => {
      const dictionary = snapshot.docs.map((doc) => doc.id);
      setNweets(dictionary);
      // setNweets(dictionary);
      // console.log(dictionary);
      // console.log(Object.keys(dictionary[0]));
    });

    // dbService
    //   .collection("words")
    //   .doc("words")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc.data());
    //     } else {
    //       console.log("No");
    //     }
    //   });

    // dbService
    //   .collection("words")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       // setNweets(doc.data());
    //       console.log("current:", doc.data());
    //     } else {
    //       console.log("No");
    //     }
    //   });
    // console.log(nweets);
  }, []);

  return (
    <div className="container">
      {/* <DicFactory userObj={userObj} /> */}
      <div style={{ marginTop: 30 }}>
        <HotDic>
          {nweets.map((nweet) => (
            <HotDicContent key={nweet}>
              <Link to="/${nweet}" className="dic-cover">
                {nweet[0]}
              </Link>
              <div className="dic-name">{nweet[0]}</div>
            </HotDicContent>
          ))}
        </HotDic>
      </div>
    </div>
  );
};

export default Home;

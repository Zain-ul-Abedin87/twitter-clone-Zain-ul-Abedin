import React, { useState, useEffect } from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
// import db from "./firebase"
import db from "./firebase";
import FlipMove  from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("NewPosts").onSnapshot(
      (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setPosts(data);
        console.log(db.collection("NewPosts"));
      }
      // setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home Sweet Home</h3>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avater={post.avater}
            image={post.image}
          />
        ))}
      </FlipMove>
      {/* <Post
        displayName="Zain ul Abedin"
        username="Zain"
        verified={true}
        text="Allhumdulillah is Working with Power of Allah"
        avater="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiFx6AmOvMonwEycIiMsovKrpJtn74jdURw&usqp=CAU"
      /> */}
    </div>
  );
}

export default Feed;

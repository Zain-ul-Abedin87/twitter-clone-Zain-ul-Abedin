import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./tweetBox.css";
import db from "./firebase"

function TweetBox() {
  const [tweetMessage, settweetMessage] = useState("");
  const [tweetImage, settweetImage] = useState("")

  const sendTweet = e =>{
    e.preventDefault();
    db.collection("NewPosts").add({
      displayName:"Zain ul Abedin",
        username:"Zain",
        verified:true,
        text:tweetMessage,
        avater:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj",
        image:tweetImage,
    })
    console.log("change")
    settweetImage("");
    settweetMessage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
          <input
            onChange={(e) => settweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is happening"
          ></input>
        </div>
        <input
           value={tweetImage}
           onChange={(e)=> settweetImage(e.target.value)}
          className="tweetBox__ImageInput"
          placeholder="Enter image Url"
          type="text"
        ></input>

        <Button type="submit" onClick={sendTweet} className="TweetBox-TweetBtn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

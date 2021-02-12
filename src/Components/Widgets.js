import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      {/* <h2>Widgets</h2> */}
      <div className="widgets-input">
        <SearchIcon className="widgets-SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widgetsContainer">
        <h2>What is happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

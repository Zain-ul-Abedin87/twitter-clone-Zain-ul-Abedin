import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avater },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avater} />
        </div>
        <div className="Post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {displayName}
                <span className="post-header-Special">
                  {verified && <VerifiedUserIcon className="post-badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post-header-Decription">
              <p>{text} </p>
            </div>
          </div>

          <img src={image} />
          <div className="post-footer">
            <ChatBubbleIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

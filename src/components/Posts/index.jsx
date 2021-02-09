import React from "react";
import Post from "./Post";
import Images from "./Images";
import AddPost from "../AddPost";
import AddPostWindow from "../AddPostWindow";
import Logout from "../Logout";

function Posts(props) {
  return (
    <div className="posts">
      <Logout />
      <AddPost />
      <Post />
      <Images />
      <AddPostWindow />
    </div>
  );
}

export default Posts;

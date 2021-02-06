import React from "react";
import Post from "./Post";
import Images from "./Images";
import AddPost from "../AddPost";
import AddPostWindow from "../AddPostWindow";

function Posts(props) {
  return (
    <div className="posts">
      <AddPost />
      <Post />
      <Images />
      <AddPostWindow />
    </div>
  );
}

export default Posts;

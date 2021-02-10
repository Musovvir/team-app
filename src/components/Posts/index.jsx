import React from "react";
import Post from "./Post";
import AddPost from "../AddPost";
import Logout from "../Logout";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="posts">
      <Logout />
      <div className="posts" id="post">
        <AddPost />
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Posts;

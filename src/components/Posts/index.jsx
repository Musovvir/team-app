import React from "react";
import Post from "./Post";
import AddPost from "../AddPost";
import { useSelector } from "react-redux";

function Posts(props) {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="posts" id="post">
      <AddPost />
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
}

export default Posts;

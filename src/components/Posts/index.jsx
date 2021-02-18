import React, { useEffect } from "react";
import Post from "./Post";
import AddPost from "../AddPost";
import Logout from "../Logout";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import RegistrationButton from "../Registration/RegistrationButton";
import { loadPosts } from "../../redux/reducers/posts";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const authorizing = useSelector((state) => state.authorization.authorizing);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      {authorizing ? (
        <Logout />
      ) : (
        <div className="commonPosts">
          <RegistrationButton /> <Login />
        </div>
      )}
      <div className="posts">
        {authorizing && <AddPost />}
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Posts;

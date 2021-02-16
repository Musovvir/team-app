import React, {useEffect} from "react";
import moment from "moment";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";
import { CloseOutlined } from "@ant-design/icons";
import {deletePost, loadPosts} from "../../redux/actions/posts";
import { useDispatch } from "react-redux";
import * as PropTypes from "prop-types";
import Image from "./Images/Image";
import dayjs from "dayjs";
import {loadUsers} from "../../redux/actions/users";

function Post({ post }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch(deletePost(post.id))
  }

    useEffect(() => {
        dispatch(loadPosts());
    });

  return (
    <div className="post">
      <div className="commonPost">
        <div className="Avatars">
          <Avatars />
        </div>
        <div className="nickname">
          Homer Simpson
          <div className="time">{dayjs(post.time).format("LT")}</div>
        </div>
        <div className="delete" onClick={handleDelete}>
          <CloseOutlined />
        </div>
      </div>
      <Title level={4}>{post.title}</Title>
      <div className="text">{post.text}</div>
      <Image />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

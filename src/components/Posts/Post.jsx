import React from "react";
import moment from "moment";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";
import { CloseOutlined } from "@ant-design/icons";
import { deletePost } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";
import * as PropTypes from "prop-types";
import Image from "./Images/Image";

function Post({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="commonPost">
        <div className="Avatars">
          <Avatars />
        </div>
        <div className="nickname">
          Homer Simpson
          <div className="time">{moment(Post.time).format("LT")}</div>
        </div>
        <div className="delete" onClick={() => dispatch(deletePost(post.id))}>
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
  post: PropTypes.object,
};

export default Post;

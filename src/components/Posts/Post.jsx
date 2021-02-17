import React from "react";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Images/Image";
import { deletePost } from "../../redux/reducers/posts";
import moment from "moment/moment";

function Post({ post }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const users = useSelector((state) =>
    state.users.users.find((user) => {
      return user.id === post.userId;
    })
  );

  return (
    <div className="post">
      <div className="commonPost">
        <div className="Avatars">
          <Avatars />
        </div>
        <div className="nickname">
          {users.login}
          <div className="time">{moment().startOf("hour").fromNow()}</div>
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

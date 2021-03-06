import React from "react";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Images/Image";
import DeletePost from "./DeletePost";
import "antd/es/date-picker/style/index";
import dayjs from "dayjs";

function Post({ post }) {
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
          {users?.login}
          <div className="time">
            <div>{dayjs(post.date).format("hh:mm")}</div>
          </div>
        </div>
        <DeletePost post={post} />
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

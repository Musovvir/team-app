import React from "react";
import moment from "moment";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";
import Images from "./Images";
import { CloseOutlined } from "@ant-design/icons";
import { deletePost } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

function Post(props) {
  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="commonPost">
        <div className="Avatars">
          <Avatars />
        </div>
        <div className="nickname">
            {props.post.nickname}
          <div className="time">{moment(Post.time).format("LT")}</div>
        </div>
        <div
          className="delete"
          onClick={() => dispatch(deletePost(props.post.id))}
        >
          <CloseOutlined />
        </div>
      </div>
      <Title level={4}>{props.post.title}</Title>
      <div className="text">{props.post.text}</div>
      <Images />
    </div>
  );
}

export default Post;

import React from "react";
import moment from "moment";
import Avatars from "./Avatars";
import Title from "antd/es/typography/Title";

function Post(props) {
  return (
    <div className="post">
      <div className="commonPost">
        <div className="Avatars">
          <Avatars />
        </div>
        <div className="nickname">
          Lorem ipsum
          <div className="time">{moment(Post.time).format("LT")}</div>
        </div>
      </div>
      <Title level={4}>
        <h4>Lorem ipsum dolor sit amet</h4>
      </Title>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
}

export default Post;

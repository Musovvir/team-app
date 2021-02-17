import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function UserAvatar() {
  return (
    <div>
      <Avatar size="large" icon={<UserOutlined />} className="avatar" />
    </div>
  );
}

export default UserAvatar;

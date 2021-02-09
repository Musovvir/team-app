import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

function AddPost(props) {
  return (
    <Link to="/addPostWindow">
      <div className="addPost">
        <button className="addButton">
          <div className="plus">
            <PlusOutlined />
          </div>
          <Button type="primary">Добавить пост</Button>
        </button>
      </div>
    </Link>
  );
}

export default AddPost;

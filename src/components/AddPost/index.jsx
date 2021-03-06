import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleModal } from "../../redux/reducers/posts";

function AddPost() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <Link to="/addPostWindow">
      <div className="addPost" onClick={handleClick}>
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

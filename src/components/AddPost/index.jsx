import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {toggleModal} from "../../redux/actions/posts";
import {useDispatch} from "react-redux";

function AddPost(props) {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggleModal());
    }
  return (
    <div className="addPost">
      <button className="addButton" onClick={handleClick}>
        <div className="plus">
          <PlusOutlined />
        </div>
        <Button type="primary">Добавить пост</Button>
      </button>
    </div>
  );
}

export default AddPost;

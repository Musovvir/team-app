import React from "react";
import AddTitle from "./AddTitle";
import AddText from "./AddText";
import { Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../redux/actions/posts";

function AddPostWindow() {
  const dispatch = useDispatch();

  const sentPost = () => {
    dispatch(sendPost());
  };

  return (
    <div className="addPostWindow">
      <AddTitle />
      <AddText />
      <Form.Item>
        <Button type="primary" onClick={sentPost}>
          Добавить
        </Button>
      </Form.Item>
    </div>
  );
}

export default AddPostWindow;

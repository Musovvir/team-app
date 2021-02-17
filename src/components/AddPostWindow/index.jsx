import React from "react";
import AddTitle from "./AddTitle";
import AddText from "./AddText";
import { Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import { clearInput, sendPost } from "../../redux/reducers/posts";

function AddPostWindow() {
  const dispatch = useDispatch();

  const sentPost = () => {
    dispatch(sendPost());
    dispatch(clearInput());
  };

  return (
    <div className="addPostWindow">
      <AddTitle />
      <AddText />
      <Link to="/posts">
        <Form.Item>
          <div className="commonButton">
            <BackButton />
            <Button type="primary" onClick={sentPost}>
              Добавить
            </Button>
          </div>
        </Form.Item>
      </Link>
    </div>
  );
}

export default AddPostWindow;

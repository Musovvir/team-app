import React from "react";
import AddTitle from "./AddTitle";
import AddText from "./AddText";
import AddImage from "./AddImage";
import { Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../redux/actions/posts";

function AddPostWindow(props) {
  const opened = useSelector((state) => state.posts.opened);

  const dispatch = useDispatch();

  const text = useSelector((state) => state.posts.text);

  const title = useSelector((state) => state.posts.title);

  const sentPost = () => {
    dispatch(sendPost(title, text));
  };

  return (
    <div className="addPostWindow">
      <AddTitle />
      <AddText />
      <AddImage />
      <Form.Item>
        <a href="/posts">
          <Button type="primary" onClick={sentPost}>
            Добавить
          </Button>
        </a>
      </Form.Item>
    </div>
  );
}

export default AddPostWindow;

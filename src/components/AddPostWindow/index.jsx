import React from "react";
import AddTitle from "./AddTitle";
import AddText from "./AddText";
import AddImage from "./AddImage";
import { Button, Form } from "antd";
import { useSelector } from "react-redux";

function AddPostWindow(props) {
  const opened = useSelector((state) => state.posts.opened);

  if (!opened) {
    return null;
  }

  return (
    <div className="addPostWindow">
      <AddTitle />
      <AddText />
      <AddImage />
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </div>
  );
}

export default AddPostWindow;

import React, { useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../../redux/actions/posts";

function AddText() {
  const [text, setText] = useState();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  // const text = useSelector((state) => state.posts.text);

  const GetText = (e) => {
    dispatch(getText(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input placeholder="Text" value={text} onChange={GetText} />
      </Form.Item>
    </div>
  );
}

export default AddText;

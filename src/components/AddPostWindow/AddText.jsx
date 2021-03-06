import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../../redux/reducers/posts";

function AddText() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.posts.text);

  const getDescription = (e) => {
    dispatch(getText(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input placeholder="Введите описание" value={text} onChange={getDescription} />
      </Form.Item>
    </div>
  );
}

export default AddText;

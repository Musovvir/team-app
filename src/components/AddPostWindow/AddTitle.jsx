import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTitle } from "../../redux/reducers/posts";

function AddTitle() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.posts.title);

  const handleChangeTitle = (e) => {
    dispatch(getTitle(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input
          placeholder="Введите заголовок"
          value={title}
          onChange={handleChangeTitle}
        />
      </Form.Item>
    </div>
  );
}

export default AddTitle;

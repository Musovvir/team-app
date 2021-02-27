import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTitle } from "../../redux/reducers/posts";

function AddTitle() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.posts.title);

  //fixme handleChangeTitle
  const handleGetTitle = (e) => {
    dispatch(getTitle(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input
          placeholder="Введите заголовок"
          value={title}
          onChange={handleGetTitle}
        />
      </Form.Item>
    </div>
  );
}

export default AddTitle;

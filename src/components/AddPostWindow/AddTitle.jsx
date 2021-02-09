import React, { useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTitle } from "../../redux/actions/posts";

function AddTitle(props) {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.posts.title);

  const GetTitle = (e) => {
    dispatch(getTitle(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input placeholder="Title" value={title} onChange={GetTitle} />
      </Form.Item>
    </div>
  );
}

export default AddTitle;

import React from "react";
import { Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { getImage } from "../../redux/actions/posts";

function AddImage(props) {
  const dispatch = useDispatch();

  const imageChange = (e) => {
    dispatch(getImage(e.target.value));
  };
  return (
    <div>
      <Form.Item>
        <input type="file" id="file" onChange={imageChange}/>
        <Button>Загрузить фото</Button>
      </Form.Item>
    </div>
  );
}

export default AddImage;

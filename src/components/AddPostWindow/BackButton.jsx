import React from "react";
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <Link to="/posts">
      <Form.Item>
        <Button type="primary">Назад</Button>
      </Form.Item>
    </Link>
  );
}

export default BackButton;

import React from "react";
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

function RegistrationButton() {
  return (
    <Link to="/registration">
      <Form.Item>
        <Button type="primary">Регистрация</Button>
      </Form.Item>
    </Link>
  );
}

export default RegistrationButton;

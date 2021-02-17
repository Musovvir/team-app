import React from "react";
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

function RegistrationCompleted() {
  return (
    <div className="completed">
      Регистрация прошла успешно!
      <Link to="/posts">
        <Form.Item>
          <Button type="primary" className="tape">
            Перейти к ленте
          </Button>
        </Form.Item>
      </Link>
    </div>
  );
}

export default RegistrationCompleted;

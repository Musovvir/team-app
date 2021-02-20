import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "antd";

function Login() {
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };
  return (
    <Form.Item>
      <Button type="primary" onClick={login}>
        Войти
      </Button>
    </Form.Item>
  );
}

export default Login;

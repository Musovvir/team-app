import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/actions/authorization";
import {useEffect} from "react/cjs/react.production.min";
import {loadPosts} from "../redux/actions/posts";

function Login() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.authorization.error);

  const authorizing = useSelector((state) => state.authorization.authorizing);

  const [login, setLogin] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const [pass, setPass] = useState("");

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleClick = () => {
    dispatch(loginStart(login, pass));
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login">
      <div className="login-block">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Введите логин"
              value={login}
              onChange={handleChangeLogin}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={handleChangePass}
            />
            {error && (
              <div className="error-text">Неверный логин или пароль</div>
            )}
          </Form.Item>
          <div className="login-form-button">
            <Form.Item>
              <a href="/posts">
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleClick}
                  disabled={authorizing}
                >
                  Войти
                </Button>
              </a>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

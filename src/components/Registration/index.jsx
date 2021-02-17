import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getEmail,
  getLogin,
  getPassword,
  sendUsers,
} from "../../redux/reducers/users";

function Registration() {
  const dispatch = useDispatch();

  const handleGetLogin = (e) => {
    dispatch(getLogin(e.target.value));
  };

  const handleGetEmail = (e) => {
    dispatch(getEmail(e.target.value));
  };

  const handleGetPassword = (e) => {
    dispatch(getPassword(e.target.value));
  };

  const sentUsers = () => {
    dispatch(sendUsers());
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const RegistrationForm = () => {
    const [form] = Form.useForm();

    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="nickname"
          label={<span>Имя (полное)</span>}
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите Ваше полное имя!",
              whitespace: true,
            },
          ]}
        >
          <Input onChange={handleGetLogin} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Пожалуйста, введите Ваш e-mail!",
            },
          ]}
        >
          <Input onChange={handleGetEmail} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите пароль!",
            },
          ]}
          hasFeedback
        >
          <Input.Password onChange={handleGetPassword} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Повторите пароль"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Пожалуйста, повторите пароль!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password onChange={handleGetPassword} />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Не порть нам жизнь, Ахьмад"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Я обещаю дать дипломную!</Checkbox>
        </Form.Item>
        <Link to="/registrationCompleted">
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={sentUsers}>
              Регистрация
            </Button>
          </Form.Item>
        </Link>
      </Form>
    );
  };

  return (
    <div>
      <RegistrationForm />
    </div>
  );
}

export default Registration;

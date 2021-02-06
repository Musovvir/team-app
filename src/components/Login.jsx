import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/actions/authorization";
import { Button } from "antd";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function Login(props) {

  return (
    <div className="login">
      {/*<div className="block-login">*/}
      {/*  <div className="col-5 py-3 rounded">*/}
      {/*    <div className="block-form">*/}
      {/*      <h2 className="text-authorization">Авторизация</h2>*/}
      {/*      <div className="form-group">*/}
      {/*        <Space direction="vertical">*/}
      {/*          <Input*/}
      {/*            placeholder="Введите логин"*/}
      {/*            value={login}*/}
      {/*            onChange={handleChangeLogin}*/}
      {/*          />*/}
      {/*          <Input.Password*/}
      {/*            placeholder="Введите пароль"*/}
      {/*            value={pass}*/}
      {/*            onChange={handleChangePass}*/}
      {/*            iconRender={(visible) =>*/}
      {/*              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />*/}
      {/*            }*/}
      {/*          />*/}
      {/*        </Space>*/}
      {/*      </div>*/}
      {/*      {error && (*/}
      {/*        <div className="error-text">Неверный логин или пароль</div>*/}
      {/*      )}*/}
      {/*      <div className="form-button">*/}
      {/*        <Button*/}
      {/*          onClick={handleClick}*/}
      {/*          disabled={authorizing}*/}
      {/*          type="primary"*/}
      {/*        >*/}
      {/*          Войти*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default Login;

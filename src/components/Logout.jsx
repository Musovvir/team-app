import React from "react";
import { useDispatch } from "react-redux";
import { logoutStart } from "../redux/reducers/authorization";
import { Button, Form } from "antd";
import BackButton from "./AddPostWindow/BackButton";

function Logout() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    dispatch(logoutStart());
  };
  return (
        <Form.Item>
          <Button type="primary" className="logoutBlock" onClick={logout}>
            Выйти
          </Button>
        </Form.Item>
  );
}

export default Logout;

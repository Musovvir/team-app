import React from "react";
import { useDispatch } from "react-redux";
import { logoutStart } from "../redux/actions/authorization";

function Logout(props) {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    dispatch(logoutStart());
  };
  return (
    <div>
      <a href="#" onClick={logout}>
        Выход
      </a>
    </div>
  );
}

export default Logout;

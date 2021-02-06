import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
<<<<<<< HEAD
import "antd";
import "antd/dist/antd.compact.min.css"
=======
import "antd/dist/antd.css";
>>>>>>> d00201574f5c8821ac329b42826dd3af27a1fe30
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

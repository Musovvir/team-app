import React, { useEffect } from "react";
import Posts from "./components/Posts";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
// import Logout from "./components/Logout";
// import AddPostWindow from "./components/AddPostWindow";
import { loadPosts } from "./redux/actions/posts";
import AddPostWindow from "./components/AddPostWindow";
import Logout from "./components/Logout";

function App() {
  const token = useSelector((state) => state.authorization.token);
  console.log({ token });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  });

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/posts" component={Posts} />
        <Route path="/addPostWindow" component={AddPostWindow} />
        <Redirect to="/posts" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;

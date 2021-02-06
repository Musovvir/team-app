<<<<<<< HEAD
import React from "react";
import Posts from "./components/Posts";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.authorization.token);

  let routes;

  if (token) {
    routes = <Switch>{/*<Route path="/logout" component={Logout} />*/}</Switch>;
  } else {
    routes = (
      <Switch>
        {/*<Route path="/login" component={Qwer} />*/}
        {/*<Redirect to="login" />*/}
        <Route path="/posts" component={Posts} />
        <Redirect to="posts" />
=======
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Qwer from "./components/Qwer";
import Logout from "./components/Logout";

function App() {
  const token = useSelector((state) => state.authorization.token);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        {/*<Route path="/posts" component={Posts} />*/}
        <Redirect to="/posts" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login" component={Qwer} />
        <Redirect to="/login" />
>>>>>>> d00201574f5c8821ac329b42826dd3af27a1fe30
      </Switch>
    );
  }

<<<<<<< HEAD
  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
=======
  return <BrowserRouter>{routes}</BrowserRouter>;
>>>>>>> d00201574f5c8821ac329b42826dd3af27a1fe30
}

export default App;

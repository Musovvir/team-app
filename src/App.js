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

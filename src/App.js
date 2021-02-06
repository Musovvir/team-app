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
      </Switch>
    );
  }

  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;

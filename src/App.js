import React, { useEffect } from "react";
import Posts from "./components/Posts";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Authorization from "./components/Authorization";
import AddPostWindow from "./components/AddPostWindow";
import Logout from "./components/Logout";
import RegistrationCompleted from "./components/Registration/RegistrationCompleted";
import { loadUsers } from "./redux/reducers/users";
import { loadPosts } from "./redux/reducers/posts";
import Registration from "./components/Registration";

function App() {
  const authorizing = useSelector((state) => state.authorization.authorizing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route path="/registration" component={Registration} />
      <Route path="/registrationCompleted" component={RegistrationCompleted} />
      <Route path="/logout" component={Logout} />
      <Route path="/posts" component={Posts} />
      <Route path="/addPostWindow" component={AddPostWindow} />
      {authorizing ? (
        <Redirect to="/posts" />
      ) : (
        <>
          <Route path="/login" component={Authorization} />
          <Redirect to="/posts" />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

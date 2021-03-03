import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import users from "./reducers/users";
import posts from "./reducers/posts";
import authorization from "./reducers/authorization";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = combineReducers({
  users,
  posts,
  authorization,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));

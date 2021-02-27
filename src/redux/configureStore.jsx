import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { posts } from "./reducers/posts";
import { authorization } from "./reducers/authorization";
import { users } from "./reducers/users";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

//fixme сделать даксы по правилам

const rootReducer = combineReducers({ posts, authorization, users });

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { posts } from "./reducers/posts";
import {authorization} from "./reducers/authorization";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const rootReducer = combineReducers({ posts, authorization });

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
<<<<<<< HEAD
import { posts } from "./reducers/posts";
import {authorization} from "./reducers/authorization";
=======
import { authorization } from "./reducers/authorization";
>>>>>>> d00201574f5c8821ac329b42826dd3af27a1fe30

const logger = createLogger({
  collapsed: true,
  diff: true,
});

<<<<<<< HEAD
const rootReducer = combineReducers({ posts, authorization });
=======
const rootReducer = combineReducers({ authorization });
>>>>>>> d00201574f5c8821ac329b42826dd3af27a1fe30

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { authorization } from "./reducers/authorization";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const rootReducer = combineReducers({ authorization });

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

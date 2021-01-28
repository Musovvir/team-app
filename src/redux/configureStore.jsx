import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const preloadedState = JSON.parse(localStorage.getItem(""));

const rootReducer = combineReducers("");

export const store = createStore(
  rootReducer,
  preloadedState ? preloadedState : undefined,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem();
});

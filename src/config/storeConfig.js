//import { createStore, compose, applyMiddleware } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk, logger))
);
//const store = createStore(reducers, {}, applyMiddleware(thunk, logger));
export default store;

import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/root";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.querySelector("#root")
);

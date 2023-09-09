import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import App from "./Components/App";
import { createStore } from "redux";
import Reducers from "./Reducers";

ReactDOM.render(
  <Provider store={createStore(Reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

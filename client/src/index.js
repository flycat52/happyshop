import React from "react";
import ReactDOM from "react-dom";
import "./styles/vendor/bootstrap/css/bootstrap.min.css";
import "./styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./styles/css/util.css";
import "./styles/css/main.css";

import "./styles/custom.css";

import App from "./components/app.component";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

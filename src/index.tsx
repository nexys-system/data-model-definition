import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import RouterApp from "./router";

const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || "";

ReactDOM.render(
  <Router basename={basename}>
    <RouterApp />
  </Router>,
  document.getElementById("root")
);

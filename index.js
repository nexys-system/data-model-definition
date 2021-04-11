import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import {BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import RouterApp from "./router.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(RouterApp, null)), document.getElementById("root"));
serviceWorker.unregister();

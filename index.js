import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import {BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import RouterApp from "./router.js";
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL || "";
ReactDOM.render(/* @__PURE__ */ React.createElement(Router, {
  basename
}, /* @__PURE__ */ React.createElement(RouterApp, null)), document.getElementById("root"));

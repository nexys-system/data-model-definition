import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import React from "./_snowpack/pkg/react.js";
import Icon from "./components/icon.js";
import {ghUrl} from "./utils.js";
const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "sha_undefined";
const ghSha = ghUrl + "/commit/" + sha;
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("h1", null, "Nexys Data Defintion Language"), /* @__PURE__ */ React.createElement("p", null, "Use the menu to explore the different functionalities of the package"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: ghUrl
}, /* @__PURE__ */ React.createElement(Icon, {
  name: "code"
}), " Source"), " ", "under MIT license"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: ghSha
}, sha))));

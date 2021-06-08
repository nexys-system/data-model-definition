import React from "./_snowpack/pkg/react.js";
import {
  Switch,
  Route,
  withRouter
} from "./_snowpack/pkg/react-router-dom.js";
import Layout from "./layout.js";
import Main from "./app.js";
import ValidateSchema from "./validation/schema.js";
import OpenAPi from "./open-api/index.js";
import toTS from "./model-to-ts/index.js";
import queryToTS from "./query-to-ts/index.js";
import toJoi from "./model-to-ts/joi.js";
import FakeData from "./fake-data/index.js";
import SQLTransform from "./sql-transform/index.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, "Page Not Found");
function Router() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Main
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/validate/schema",
    component: ValidateSchema
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/openApi",
    component: OpenAPi
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/toTS",
    component: toTS
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/queryToTs",
    component: queryToTS
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/toJoi",
    component: toJoi
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/fake-data",
    component: FakeData
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/sql-transform",
    component: SQLTransform
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: NotFound
  })));
}
export default withRouter(Router);

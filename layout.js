import React from "./_snowpack/pkg/react.js";
import {Link} from "./_snowpack/pkg/react-router-dom.js";
import {ghUrl} from "./utils.js";
import Icon from "./components/icon.js";
const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)"
};
const title = "Nexys Data Model Definition Language";
const menus = [
  {link: "/validate/schema", name: "Validate Schema"},
  {link: "/openApi", name: "Open Api Conversion"},
  {link: "/toTS", name: "Model to TypeScript"},
  {link: "/queryToTS", name: "Query to TypeScript"},
  {link: "/fake-data", name: "Fake Data"}
];
export default (props) => {
  const header = /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    style,
    className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "my-0 mr-md-auto font-weight-normal"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, title), " ", /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
    href: ghUrl
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "code"
  })))), /* @__PURE__ */ React.createElement("nav", {
    className: "my-2 my-md-0 mr-md-3"
  }, menus.map((menu, i) => /* @__PURE__ */ React.createElement(Link, {
    className: "p-2 text-dark",
    key: i,
    to: menu.link
  }, menu.name)))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, header, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, props.children));
};

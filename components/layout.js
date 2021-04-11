import React from "../_snowpack/pkg/react.js";
export const LeftRight = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h2", null, props.title), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, props.left), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, props.right)));
};

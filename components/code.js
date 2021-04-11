import React from "../_snowpack/pkg/react.js";
const style = {
  display: "block",
  whiteSpace: "pre-wrap"
};
export default (props) => {
  return /* @__PURE__ */ React.createElement("code", {
    style
  }, props.value);
};

import React from "../_snowpack/pkg/react.js";
export default (props) => {
  const {name} = props;
  const className = "fa fa-" + name;
  return /* @__PURE__ */ React.createElement("i", {
    className
  });
};

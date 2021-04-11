import React from "../_snowpack/pkg/react.js";
export default (props) => {
  const handleChange = (x) => {
    const v = x.target.value;
    props.onChange(v);
  };
  return /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    style: {minWidth: "100%", height: "400px"},
    placeholder: "insert your json here",
    value: props.content,
    onChange: handleChange
  });
};

import React from "../_snowpack/pkg/react.js";
export default ({
  content,
  onChange,
  placeholder = "insert your json here"
}) => {
  const handleChange = (x) => {
    const v = x.target.value;
    onChange(v);
  };
  return /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    style: {minWidth: "100%", height: "400px"},
    placeholder,
    value: content,
    onChange: handleChange
  });
};

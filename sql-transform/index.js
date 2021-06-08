import React from "../_snowpack/pkg/react.js";
import * as SQLUtils from "../lib/sql/index.js";
import Textarea from "../components/textarea.js";
export default () => {
  const [input, setInput] = React.useState("");
  const [out, setOut] = React.useState(void 0);
  const handleTransform = () => {
    const out2 = SQLUtils.tableDefToFields(input);
    setOut(out2);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Textarea, {
    content: input,
    onChange: (v) => setInput(v),
    placeholder: "enter SQL definition here"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: handleTransform,
    className: "btn btn-primary"
  }, "Transform"), out && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigator.clipboard.writeText(JSON.stringify(out)),
    className: "btn btn-small btn-default"
  }, "Copy to clipboard"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(out, null, 2))));
};

import React, {useState} from "../_snowpack/pkg/react.js";
import {Textarea, Error, Code, Layout} from "../components/index.js";
import {isJson} from "../utils.js";
import {companyDef} from "../lib/utils.data.js";
import {getOutput} from "./utils.js";
export default () => {
  const [content, setContent] = useState(JSON.stringify(companyDef, null, 2));
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (t) => {
    setContent(t);
    if (!isJson(t)) {
      setError("no json");
    } else {
      setError(null);
    }
  };
  const convert = () => {
    try {
      const o = getOutput(content);
      setOutput(o);
    } catch (_err) {
      setError("can't convert");
    }
  };
  const left = /* @__PURE__ */ React.createElement(React.Fragment, null, error && /* @__PURE__ */ React.createElement(Error, {
    message: error
  }), /* @__PURE__ */ React.createElement(Textarea, {
    content,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: convert
  }, "Convert!"), " ", /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: () => setContent("[]")
  }, "Reset"));
  const right = output && /* @__PURE__ */ React.createElement(Code, {
    value: output
  });
  return /* @__PURE__ */ React.createElement(Layout.LeftRight, {
    title: "Schema to Typescript",
    left,
    right
  });
};

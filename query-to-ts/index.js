import React, {useState} from "../_snowpack/pkg/react.js";
import {Textarea, Error, Code, Layout} from "../components/index.js";
import {isJson} from "../utils.js";
import {getOutput} from "./utils.js";
import * as DataSample from "../lib/query/query-to-type.data.js";
const querySample = {
  [DataSample.entityName1]: {projection: {status: {name: true, address: true}}},
  [DataSample.entityName2]: {}
};
export default () => {
  const [model, setModel] = useState(JSON.stringify(DataSample.model, null, 2));
  const [query, setQuery] = useState(JSON.stringify(querySample, null, 2));
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (t) => {
    setModel(t);
    if (!isJson(t)) {
      setError("no json");
    } else {
      setError(null);
    }
  };
  const handleQueryChange = (t) => {
    setQuery(t);
    if (!isJson(t)) {
      setError("no json");
    } else {
      setError(null);
    }
  };
  const convert = () => {
    try {
      const o = getOutput(query, model);
      setOutput(o);
    } catch (_err) {
      setError("can't convert");
    }
  };
  const handleReset = () => {
    setModel("[]");
    setQuery("[]");
  };
  const left = /* @__PURE__ */ React.createElement(React.Fragment, null, error && /* @__PURE__ */ React.createElement(Error, {
    message: error
  }), /* @__PURE__ */ React.createElement("h4", null, "Query"), /* @__PURE__ */ React.createElement(Textarea, {
    content: query,
    onChange: handleQueryChange
  }), /* @__PURE__ */ React.createElement("h4", null, "Model"), /* @__PURE__ */ React.createElement(Textarea, {
    content: model,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: convert
  }, "Get output TypeScript type!"), " ", /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: handleReset
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

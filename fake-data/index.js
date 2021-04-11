import React, {useState} from "../_snowpack/pkg/react.js";
import {Textarea, Error, Code, Layout} from "../components/index.js";
import {isJson} from "../utils.js";
import * as FakeData from "../lib/query/fake.js";
const getOutput = (x) => {
  try {
    const jModel = JSON.parse(x);
    return FakeData.row(jModel);
  } catch (err) {
    throw Error({message: "model could not be interpreted"});
  }
};
const sampleRow = [
  {name: "f1", type: "String"},
  {name: "f2", type: "Int"},
  {name: "f3", type: "Boolean", optional: true},
  {name: "f4", type: "Float", optional: true}
];
export default () => {
  const [model, setModel] = useState(JSON.stringify(sampleRow, null, 2));
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [n, setN] = useState(1);
  const handleChange = (t) => {
    setModel(t);
    if (!isJson(t)) {
      setError("no json");
    } else {
      setError(null);
    }
  };
  const handleChangeN = (x) => {
    const w = x.target.value;
    console.log(w);
    const v = Number(w);
    if (v > 0) {
      setN(v);
    }
  };
  const convert = () => {
    try {
      const o = new Array(n).fill(null).map((_x) => {
        return getOutput(model);
      });
      setOutput(JSON.stringify(o, null, 2));
    } catch (_err) {
      console.log(_err);
      setError(`can't convert`);
    }
  };
  const handleReset = () => {
    setModel("[]");
  };
  const left = /* @__PURE__ */ React.createElement(React.Fragment, null, error && /* @__PURE__ */ React.createElement(Error, {
    message: error
  }), /* @__PURE__ */ React.createElement("h5", null, "Fields definition"), /* @__PURE__ */ React.createElement(Textarea, {
    content: model,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    value: n,
    onChange: handleChangeN
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: convert
  }, "Generate!"), " ", /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: handleReset
  }, "Reset"));
  const right = output && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Code, {
    value: output
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button"
  }, "Copy"));
  return /* @__PURE__ */ React.createElement(Layout.LeftRight, {
    title: "Create Mock Data",
    left,
    right
  });
};

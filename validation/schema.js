import React from "../_snowpack/pkg/react.js";
import {validateModelDef} from "../lib/schema-validation.js";
import ValidateComponent from "./layout.js";
import {model} from "../lib/query/query-to-type.data.js";
const validateSchema = (content) => {
  const validation = validateModelDef(JSON.parse(content));
  if (validation && !validation.status && validation.errors) {
    const errors = ["the string you entered is not a properly formatted DDL file, try again"].concat(validation.errors.map((x) => {
      return x;
    }));
    return {errors};
  }
  return validation;
};
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("h2", null, "Schema Validation"), /* @__PURE__ */ React.createElement(ValidateComponent, {
  valueDefault: JSON.stringify(model, null, 2),
  validationFunc: validateSchema
}));

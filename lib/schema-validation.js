import Joi from "../_snowpack/pkg/@hapi/joi.js";
import {jvmTypes as Types} from "./type.js";
const modelParamSchema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  column: Joi.string().optional(),
  type: Joi.string().alphanum().required(),
  optional: Joi.boolean(),
  permissions: Joi.array().optional(),
  description: Joi.string().optional()
});
const modelSchema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  uuid: Joi.boolean().optional(),
  table: Joi.string().optional(),
  description: Joi.string().optional(),
  fields: Joi.array().items(modelParamSchema).unique((a, b) => a.name === b.name).required(),
  permissions: Joi.array().optional(),
  constraints: Joi.array()
});
const modelDefSchema = Joi.array().items(modelSchema).required();
const checkTypes = (model) => {
  let ts = [];
  const tNames = model.map((m) => {
    const t = m.fields.map((p) => p.type).filter((p) => p in Types);
    ts = ts.concat(t);
    return m.name;
  });
  const errors = [];
  ts.map((t) => {
    if (tNames.indexOf(t) < 0) {
      errors.push(`"${t}" is referenced as a type in params but was never defined`);
    }
    return true;
  });
  return errors;
};
const validateModelDef = (model) => {
  const result = modelDefSchema.validate(model, {abortEarly: false});
  if (result.error === void 0 || result.error === null) {
    const jModel = result.value;
    const errors = checkTypes(jModel);
    if (errors.length > 0) {
      return {status: false, errors};
    } else {
      return {status: true, errors: null};
    }
  } else {
    const errors = result.error.details.map((x) => x.message + " " + JSON.stringify(x.path));
    return {status: false, errors};
  }
};
export {validateModelDef};

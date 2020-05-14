import Joi from '@hapi/joi';
import * as T from './type';
import { jvmTypes as Types } from './type';

const modelParamSchema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  column: Joi.string().optional(),
  type: Joi.string().alphanum().required(),
  optional: Joi.boolean(),
  permissions: Joi.array().optional(),
  description: Joi.string().optional()
});

// for params, the value of `arg` has to be unique
// https://github.com/hapijs/joi/issues/1159]
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

const checkTypes = (model:T.DdEntity2[]) => {
  //console.log(typeof model)
  let ts:string[] = []

  const tNames:string[] = model.map(m => {
    const t:string[] = m.fields
    .map(p => p.type)
    .filter(p => Types.indexOf(p) < 0);

    ts = ts.concat(t);

    return m.name
  });

  const errors:string[] = [];

  ts.map(t => {
    if (tNames.indexOf(t) < 0) {
      errors.push(`"${t}" is referenced as a type in params but was never defined`)
    }
    return true;
  });

  return errors;
}

/**
 * validates a model of the JSON ddl
 */
const validateModelDef = (model:object):{status: boolean, errors: string[] | null} => {
  const schema = modelDefSchema;

  const result = schema.validate(model, { abortEarly: false });

  if (result.error === undefined || result.error === null) {
    // here check if types all exist
    const jModel:T.DdEntity2[] = model as T.DdEntity2[]
    const errors = checkTypes(jModel);

    if (errors.length > 0) {
      return {status: false, errors};
    } else {
      return {status: true, errors: null};
    }
  } else {
    const errors:string[] = result.error.details.map(x => x.message + ' ' + JSON.stringify(x.path));

    return {status: false, errors};
  }
}

export { validateModelDef };

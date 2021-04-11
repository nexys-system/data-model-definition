import * as QT from "../lib/query/query-to-type.js";
import {schemaTextFromDd} from "../lib/joi-utils.js";
export const getOutput = (query, model) => {
  const jQuery = JSON.parse(query);
  const jModel = JSON.parse(model);
  return QT.queryToType(jQuery, jModel);
};
export const getJoiSchema = (content) => {
  const j = JSON.parse(content);
  return schemaTextFromDd(j);
};

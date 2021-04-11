import {generateInterface, generateInterfaces} from "../lib/utils.js";
import {schemaTextFromDd} from "../lib/joi-utils.js";
export const getOutput = (content) => {
  const j = JSON.parse(content);
  const isArray = Array.isArray(j);
  if (isArray) {
    return generateInterfaces(j);
  } else {
    if (j.entities) {
      return generateInterfaces(j.entities);
    } else {
      return generateInterface(j);
    }
  }
};
export const getJoiSchema = (content) => {
  const j = JSON.parse(content);
  return schemaTextFromDd(j);
};

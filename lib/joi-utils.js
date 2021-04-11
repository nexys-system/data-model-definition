import Joi from "../_snowpack/pkg/@hapi/joi.js";
export const getType = (typeName) => {
  switch (typeName) {
    case "String":
      return Joi.string();
    case "Boolean":
      return Joi.boolean();
    case "Int":
    case "BigDecimal":
    case "Double":
      return Joi.number();
    case "LocalDateTime":
      return Joi.date();
    case "LocalDate":
      return Joi.string();
    default:
      console.warn(`The type "${typeName}" could not be converted to Joi, this may create some errors`);
      return Joi.string();
  }
};
export const getTypeString = (typeName) => {
  switch (typeName) {
    case "String":
      return "Joi.string()";
    case "Boolean":
      return "Joi.boolean()";
    case "Int":
    case "BigDecimal":
    case "Double":
      return "Joi.number()";
    case "LocalDateTime":
      return "Joi.date()";
    case "LocalDate":
      return "Joi.string()";
    default:
      console.warn(`The type "${typeName}" could not be converted to Joi, this may create some errors`);
      return "Joi.string()";
  }
};
export const appendOptional = (j, optional = false) => {
  if (!optional) {
    return j.required();
  }
  return j;
};
export const appendOptionalString = (j, optional = false) => {
  if (!optional) {
    return j + ".required()";
  }
  return j;
};
export const schemaFromDd = (dd, optouts = []) => {
  const r = {};
  dd.map((line) => {
    const name = line.arg;
    if (!optouts.includes(name)) {
      r[name] = appendOptional(getType(line.type), line.optional);
    }
    return null;
  });
  return r;
};
export const schemaTextFromDd = (dd, optouts = []) => {
  const r = dd.filter((x) => !optouts.includes(x.name)).map((line) => {
    return "  " + line.name + ": " + appendOptionalString(getTypeString(line.type), line.optional);
  }).join(",\n");
  return "Joi.Object({\n" + r + "\n});";
};

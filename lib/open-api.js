export const toOpenApiType = (t) => {
  switch (t) {
    case "Int":
      return "integer";
    case "BigDecimal":
    case "Double":
      return "number";
    case "Boolean":
      return "boolean";
    default:
      return "string";
  }
};
export const toUnit = (title, ddUnit) => {
  const r = {
    title,
    type: "object",
    properties: {},
    required: []
  };
  ddUnit.map((l) => {
    const type = toOpenApiType(l.type);
    r.properties[l.arg] = {type};
    if (!l.optional) {
      r.required.push(l.arg);
    }
    return null;
  });
  return r;
};
export const toOpenApiJson = (dd) => {
  const r = {};
  dd.map((l) => {
    r[l.name] = toUnit(l.name, l.params);
    return null;
  });
  return r;
};

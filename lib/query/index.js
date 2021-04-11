import * as F from "./fake.js";
export const fakeDataFromQuery = (query, models) => {
  return Object.keys(query).map((entityName) => {
    const v = query[entityName];
    return fakeDataFromParams(entityName, v, models);
  }).reduce((result, current) => {
    return Object.assign(result, current);
  }, {});
};
export const fakeDataFromParams = (entityName, params, models) => {
  const model = models.find((x) => x.name === entityName);
  if (!model) {
    throw Error("could not find model");
  }
  const nMax = 5;
  const nRows = Math.ceil(nMax * Math.random());
  const rows = new Array(nRows).fill(0).map((x) => {
    return rowAndProjection(model.fields, params.projection || {}, models);
  });
  return {[entityName]: rows};
};
export const rowAndProjection = (rowDef, projection, models = []) => {
  const r = F.row(rowDef);
  Object.keys(projection).map((k) => {
    const v = projection[k];
    if (v === false) {
      delete r[k];
    }
    if (typeof v === "object") {
      const entityDef = rowDef.find((x) => x.name === k);
      if (!entityDef) {
        throw Error("could not find associated entity" + k + " - " + JSON.stringify(rowDef));
      }
      const entityName = entityDef.type;
      const model = models.find((x) => x.name === entityName);
      if (!model) {
        throw Error("could not find model");
      }
      r[k] = rowAndProjection(model.fields, v, models);
    }
  });
  return r;
};

export const findEntity = (parentEntity, field, model) => {
  const pe = model.find((x) => x.name === parentEntity);
  if (!pe) {
    throw Error("parent entity cannot be found");
  }
  const f = pe.fields.find((x) => x.name === field);
  if (!f) {
    throw Error("field cannot be found");
  }
  return f.type;
};
export const projectionToType = (entity, projection, model) => {
  const projKeys = Object.keys(projection);
  const listRef = projKeys.filter((k) => {
    const v = projection[k];
    return typeof v === "object";
  }).map((k) => {
    const obj = projection[k];
    const entityChild = findEntity(entity, k, model);
    const ent = projectionToType(entityChild, obj, model);
    return ` & {${k}: ${ent}}`;
  });
  const listPick = projKeys.filter((k) => {
    const v = projection[k];
    return v === true;
  });
  if (listPick.length > 0) {
    return `Pick<${entity}, ${listPick.map((x) => `'${x}'`).join(" | ")}>`;
  }
  const listOmissions = projKeys.filter((k) => {
    const v = projection[k];
    return v === false;
  });
  if (listOmissions.length > 0) {
    return `Omit<${entity}, ${listOmissions.map((x) => `'${x}'`).join(" | ")}>`;
  }
  return entity + listRef.join("");
};
export const paramsToType = (entity, projection, references, model) => {
  const rt = refTypes(references, model);
  return "(" + projectionToType(entity, projection, model) + rt + ")[]";
};
export const refTypes = (references, model) => {
  const refTypes2 = Object.keys(references).map((entity) => {
    const projection = references[entity].projection || {};
    const p = paramsToType(entity, projection, {}, model);
    return ` & {${entity}: ${p}}`;
  });
  if (refTypes2.length === 0) {
    return "";
  }
  return refTypes2.join("");
};
export const queryToType = (q, model) => {
  const r = Object.keys(q).map((entity) => {
    const projection = q[entity].projection || {};
    const references = q[entity].references || {};
    const p = paramsToType(entity, projection, references, model);
    return `${entity}: ${p}`;
  }).join(", ");
  return `{${r}}`;
};

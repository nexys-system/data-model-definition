export const entityName1 = "MyEntity";
export const entityName2 = "EntityName2";
export const m1 = {
  name: entityName1,
  fields: [
    {name: "f1", type: "String"},
    {name: "f2", type: "Int"},
    {name: "f3", type: "Boolean", optional: true},
    {name: "status", type: entityName2, optional: true}
  ]
};
export const m2 = {
  name: entityName2,
  fields: [
    {name: "name", type: "String"}
  ]
};
export const model = [m1, m2];

const country = {
  name: "Country",
  table: "country",
  uuid: true,
  params: [
    {arg: "name", type: "String", column: "name_country"},
    {arg: "code", type: "String", optional: true}
  ]
};
const city = {
  name: "City",
  uuid: true,
  params: [
    {arg: "name", type: "String"},
    {arg: "country", type: "Country"},
    {arg: "timezone", type: "Timezone", optional: true}
  ]
};
const address = {
  name: "Address",
  uuid: true,
  params: [
    {arg: "street", type: "String"},
    {arg: "number", type: "Long", optional: true},
    {arg: "city", type: "City"}
  ]
};
const company = {
  name: "Company",
  uuid: false,
  params: [
    {arg: "name", type: "String"},
    {arg: "country", type: "Country", optional: true}
  ]
};
const employee = {
  name: "Employee",
  uuid: true,
  params: [
    {arg: "name", type: "String"},
    {arg: "company", type: "Company"}
  ]
};
const timezone = {
  name: "Timezone",
  uuid: true,
  params: [
    {arg: "offset", type: "Long"}
  ]
};
const models = [country, city, address, company, country, employee, timezone];
export default {models};

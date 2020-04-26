import * as I from './index';
import * as T from './type';
import * as TS from '../type';

const entityName1 = 'MyEntity';
const entityName2 = 'Status';

const params:T.Params = {
  projection: {}
};

const m1:TS.DdEntity2 = {
  name: entityName1,
  fields: [
    {name: 'f1', type: 'String'},
    {name: 'f2', type: 'Integer'},
    {name: 'f1', type: 'Boolean', optional: true},
    {name: 'status', type: entityName2, optional: true}
  ]
}

const m2:TS.DdEntity2 = {
  name: entityName2,
  fields: [
    {name: 'name', type: 'String'}
  ]
}

const models:TS.DdEntity2[] = [m1, m2]

test('fakeDataFromParams', () => {
  const e = I.fakeDataFromParams(entityName1, params, models);

  expect(Object.keys(e)[0]).toEqual(entityName1);
  expect(Array.isArray(e[entityName1])).toEqual(true)
  expect(e[entityName1].length).toBeGreaterThan(0)
  expect(typeof e[entityName1][0]).toEqual('object')
})

test('fakeDataFromQuery', () => {
  const query = {[entityName1]: {},[entityName2]: {}};
  const e = I.fakeDataFromQuery(query, models);

  expect(Object.keys(e)[0]).toEqual(entityName1);
  expect(Array.isArray(e[entityName1])).toEqual(true)
  expect(e[entityName1].length).toBeGreaterThan(0)
  expect(typeof e[entityName1][0]).toEqual('object')

  expect(Object.keys(e)[1]).toEqual(entityName2);
  expect(Array.isArray(e[entityName2])).toEqual(true)
  expect(e[entityName2].length).toBeGreaterThan(0)
  expect(typeof e[entityName2][0]).toEqual('object')
})

test('fakeDataFromParams', () => {
  const query = {[entityName1]: {projection: {status:{}}}};
  const e = I.fakeDataFromQuery(query, models);

  console.log(JSON.stringify(e))

  expect(Object.keys(e)[0]).toEqual(entityName1);
  expect(Array.isArray(e[entityName1])).toEqual(true)
  expect(e[entityName1].length).toBeGreaterThan(0)
  expect(typeof e[entityName1][0]).toEqual('object')
})



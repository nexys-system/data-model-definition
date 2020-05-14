// utility to get the output type from a query inferred from the query
import {Projection, Query, References} from './type';
import * as Q from './query-to-type';
import * as TS from '../type';

const entityName1 = 'MyEntity'
const entityName2 = 'EntityName2'

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

const model:TS.DdEntity2[] = [m1, m2]
const entity = entityName1;

test('projetion to type 1', () => {
  
  const projection:Projection = {};

  expect(Q.projectionToType(entity, projection, model)).toEqual('MyEntity');
});

test('projetion to type 1', () => {
  
  const projection:Projection = {};

  expect(Q.paramsToType(entity, projection, {}, model)).toEqual('(MyEntity)[]');
});

test('projection to type 2 - omit', () => {

  const projection:Projection = {company: false};

  const r = `Omit<MyEntity, 'company'>`

  expect(Q.projectionToType(entity, projection, model)).toEqual(r);
})

test('projection to type 2 - omit', () => {
  const projection:Projection = {company: true};

  const r = `Pick<MyEntity, 'company'>`

  expect(Q.projectionToType(entity, projection, model)).toEqual(r);
});

test('projection to type 3 - ref', () => {
  const projection:Projection = {status: {}};

  const r = `MyEntity & (status: EntityName2)`

  expect(Q.projectionToType(entity, projection, model)).toEqual(r);
});

test('projection to type 4 - ref', () => {
  const projection:Projection = {status: {name: true, address: true}};

  const r = `MyEntity & (status: Pick<EntityName2, 'name' | 'address'>)`

  expect(Q.projectionToType(entity, projection, model)).toEqual(r);
});

test('query to type', () => {
  const q:Query = {
    [entityName1]: {projection:{status: {name: true, address: true}}},
    [entityName2]: {}
  }

  const r = `{MyEntity: (MyEntity & (status: Pick<EntityName2, 'name' | 'address'>))[], EntityName2: (EntityName2)[]}`

  expect(Q.queryToType(q, model)).toEqual(r)
})

test('find entity', () => {
  expect(Q.findEntity(entityName1, 'status', model)).toEqual(entityName2)
})

test('refTypes', () => {
  const references:References = {
    [entityName2]: {projection:{name: true}}
  }
  
  const r = Q.refTypes(references, model);
  const e = ` & (EntityName2: (Pick<EntityName2, 'name'>)[])`
  expect(r).toEqual(e)
})

test('refTypes', () => {
  const projection:Projection = {status: {name: true, address: true}};
  const references:References = {
    [entityName2]: {projection:{name: true}}
  }
  
  const r = Q.paramsToType(entity, projection, references, model);
  const e = `(MyEntity & (status: Pick<EntityName2, 'name' | 'address'>) & (EntityName2: (Pick<EntityName2, 'name'>)[]))[]`
  expect(r).toEqual(e)
})

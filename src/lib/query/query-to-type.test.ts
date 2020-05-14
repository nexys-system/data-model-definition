// utility to get the output type from a query inferred from the query
import {Projection, Query, References} from './type';
import * as Q from './query-to-type';
import * as DataSample from './query-to-type.data';

const entity = DataSample.entityName1;

test('projetion to type 1', () => {
  
  const projection:Projection = {};

  expect(Q.projectionToType(entity, projection, DataSample.model)).toEqual('MyEntity');
});

test('projetion to type 1', () => {
  
  const projection:Projection = {};

  expect(Q.paramsToType(entity, projection, {}, DataSample.model)).toEqual('(MyEntity)[]');
});

test('projection to type 2 - omit', () => {

  const projection:Projection = {company: false};

  const r = `Omit<MyEntity, 'company'>`

  expect(Q.projectionToType(entity, projection, DataSample.model)).toEqual(r);
})

test('projection to type 2 - omit', () => {
  const projection:Projection = {company: true};

  const r = `Pick<MyEntity, 'company'>`

  expect(Q.projectionToType(entity, projection, DataSample.model)).toEqual(r);
});

test('projection to type 3 - ref', () => {
  const projection:Projection = {status: {}};

  const r = `MyEntity & {status: EntityName2}`

  expect(Q.projectionToType(entity, projection, DataSample.model)).toEqual(r);
});

test('projection to type 4 - ref', () => {
  const projection:Projection = {status: {name: true, address: true}};

  const r = `MyEntity & {status: Pick<EntityName2, 'name' | 'address'>}`

  expect(Q.projectionToType(entity, projection, DataSample.model)).toEqual(r);
});

test('query to type', () => {
  const q:Query = {
    [DataSample.entityName1]: {projection:{status: {name: true, address: true}}},
    [DataSample.entityName2]: {}
  }

  const r = `{MyEntity: (MyEntity & {status: Pick<EntityName2, 'name' | 'address'>})[], EntityName2: (EntityName2)[]}`

  expect(Q.queryToType(q, DataSample.model)).toEqual(r)
})

test('find entity', () => {
  expect(Q.findEntity(DataSample.entityName1, 'status', DataSample.model)).toEqual(DataSample.entityName2)
})

test('refTypes - 1', () => {
  const references:References = {
    [DataSample.entityName2]: {projection:{name: true}}
  }
  
  const r = Q.refTypes(references, DataSample.model);
  const e = ` & {EntityName2: (Pick<EntityName2, 'name'>)[]}`
  expect(r).toEqual(e)
})

test('refTypes - 2', () => {
  const projection:Projection = {status: {name: true, address: true}};
  const references:References = {
    [DataSample.entityName2]: {projection:{name: true}}
  }
  
  const r = Q.paramsToType(entity, projection, references, DataSample.model);
  const e = `(MyEntity & {status: Pick<EntityName2, 'name' | 'address'>} & {EntityName2: (Pick<EntityName2, 'name'>)[]})[]`
  expect(r).toEqual(e)
})

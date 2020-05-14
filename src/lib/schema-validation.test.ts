import * as S from './schema-validation';
import * as DataSample from '../lib/query/query-to-type.data';

test('validate', () => {
  const r = S.validateModelDef(DataSample.model)
  expect(r).toEqual({errors: null, status: true})
})

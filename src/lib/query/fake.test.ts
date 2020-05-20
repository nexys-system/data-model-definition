import * as F from './fake';
import * as T from '../type';
import * as I from './index';

test('string', () => {
  expect(typeof F.string()).toEqual('string')
});

test('int', () => {
  expect(typeof F.integer()).toEqual('number')
});

test('float', () => {
  expect(typeof F.float()).toEqual('number')
});

test('boolean', () => {
  expect(typeof F.boolean()).toEqual('boolean')
});

test('date', () => {
  const d = F.date();
  expect(typeof d).toEqual('object')
  expect(d instanceof Date).toEqual(true)
});

test('uuid', () => {
  const u = F.uuid();

  expect(u.length).toBeGreaterThan(17)
})

test('fakeRow', () => {
  const e:T.DdParams2[] = [
    {name: 'myName', type: 'String'},
    {name: 'myBool', type: 'Boolean'},
    {name: 'myNumber', type: 'Int'},
    {name: 'myOptString', type: 'String', optional: true},
    {name: 'myDate', type: 'LocalDateTime', optional: false},
  ];

  const r = F.row(e);

  console.log(r)

  expect(typeof r.id).toEqual('number')
  expect(typeof r.myName).toEqual('string')
  expect(typeof r.myBool).toEqual('boolean')
  expect(typeof r.myNumber).toEqual('number')
  expect(r.myDate instanceof Date).toEqual(true)
  expect(['undefined', 'string'].includes(typeof r.myOptString)).toEqual(true)

  // with projection
  const r2 = I.rowAndProjection(e,{myDate: false, myBool: false, myNumber: false});
  console.log(r2)
  expect(typeof r2.id).toEqual('number')
  expect(typeof r2.myName).toEqual('string')
  expect(typeof r2.myBool).toEqual('undefined')
  expect(typeof r2.myNumber).toEqual('undefined')
  expect(typeof r2.myDate).toEqual('undefined')
});

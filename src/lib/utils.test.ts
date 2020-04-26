import * as I from './utils';
import { companyDef, companyInterface } from './utils.data';

test('mapTypeToTs', () => {
  expect(I.mapTypeToTs('String')).toEqual('string');
  expect(I.mapTypeToTs('LocalDateTime')).toEqual('Date');
  expect(I.mapTypeToTs('LocalDate')).toEqual('Date');
  expect(I.mapTypeToTs('Int')).toEqual('number');
  expect(I.mapTypeToTs('BigDecimal')).toEqual('number');
  expect(I.mapTypeToTs('Double')).toEqual('number');
  expect(I.mapTypeToTs('Boolean')).toEqual('boolean');
})

test('generateInterface', () => {
  const generateInterface = I.generateInterface(companyDef);
  // console.log(generateInterface)
  expect(generateInterface).toEqual(companyInterface)
});

interface MyOptionSet {
  id: number,
  name: string,
  description?: string
}

const p = {description: true, id: true};
//const a = Object.keys(p)//.join;
const idString = 'id'

type U = {
  id: string,
  description?: string
}

type b = keyof U //'description' | 'id'
//type c = K in keyof {'description', 'id'}
//type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
const a:Pick<MyOptionSet, b> = {id: 8, description: 's'}
const d:Pick<MyOptionSet, b> = {id: 8}
const c:Omit<MyOptionSet, b> = {name: 's'}

type B<T> = T extends string ? string : 'number'
let k: keyof MyOptionSet = 'id'


type MapSchemaTypes = {
  String: string;
  Integer: number;
  oInteger?: number;
  // others?
}
type MapSchema<T extends Record<string, keyof MapSchemaTypes>> = {
  [K in keyof T]: MapSchemaTypes[T[K]]
}

function asSchema<T extends Record<string, keyof MapSchemaTypes>>(t: T): T {
  return t;
}


const records:Record<string, keyof MapSchemaTypes> = {name: 'String', age: 'Integer', height: 'oInteger'};
const personSchema = asSchema({name: 'String', age: 'Integer', height: 'oInteger'}); 
const personSchema2 = asSchema<typeof records>(records); 
type Person = MapSchema<typeof personSchema>;

const p3:Person = {name: 'String', age: 4, height: 23}
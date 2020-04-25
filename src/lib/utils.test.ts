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
  console.log(generateInterface)
  expect(generateInterface).toEqual(companyInterface)
});

import * as I from './utils';

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

const companyInterface = `export interface Company {
  id: number,
  logDateAdded: Date,
  country?: {id: number} | Country,
  wwId?: string,
  name: string,
  status: {id: number} | CompanyStatus,
  type: number,
  logUser?: {id: number} | User,
  ceId: string
}`;

const companyDef:I.DataDef = {
  "name": "Company",
  "uuid": false,
  "fields": [
      {
          "type": "LocalDateTime",
          "name": "logDateAdded",
          "optional": false
      },
      {
          "type": "Country",
          "name": "country",
          "column": "country_id",
          "optional": true
      },
      {
          "type": "String",
          "name": "wwId",
          "optional": true
      },
      {
          "type": "String",
          "name": "name",
          "optional": false
      },
      {
          "type": "CompanyStatus",
          "name": "status",
          "column": "status_id",
          "optional": false
      },
      {
          "type": "Int",
          "name": "type",
          "column": "type_id",
          "optional": false
      },
      {
          "type": "User",
          "name": "logUser",
          "column": "log_user_id",
          "optional": true
      },
      {
          "type": "String",
          "name": "ceId",
          "optional": false
      }
  ]
}


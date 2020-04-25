
import * as I from './utils';

export const companyInterface = `export interface Company {
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

export const companyDef:I.DataDef = {
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


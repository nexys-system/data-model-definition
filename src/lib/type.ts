export interface DdEntity2 {
  name: string,
  uuid?: boolean,
  table?: string,
  fields: DdParams2[]
}

export interface DdParams2 {
  name: string,
  column?: string,
  type: string,
  optional?: boolean
}

// old interface - deprecated
export interface DdEntity {
  name: string,
  uuid?: boolean,
  table?: string,
  params: DdParams[]
}

export interface DdParams {
  arg: string,
  column?: string,
  type: string,
  optional?: boolean
}
// end old

export type DllType =     'Boolean' | 'String' | 'Int' | 'Long'   | 'Double' | 'BigDecimal'  | 'LocalDateTime' | 'LocalDate'
export type OpenApiType = 'boolean' | 'string' | 'integer'        | 'number'                 | 'LocalDateTime' | 'LocalDate'

export interface OpenApiProperty {
  [k:string]: {type: OpenApiType}
}

export interface OpenApiUnit {
  title: string,
  type: string,
  properties: OpenApiProperty,
  required: string[]
}

export interface OpenApiSchema {
  [k: string]: OpenApiUnit
}


// list of JVM types that are supported
export const jvmTypes:DllType[] = ['Int', 'Long', 'Double', 'LocalDateTime', 'LocalDate', 'Boolean', 'BigDecimal', 'String'];

export const jvmToSqlType = (i:DllType):string => {
  switch (i) {
    case 'Int':
      return 'INT';
    case 'Long':
      return 'BIGINT';
    case 'Double':
      return 'FLOAT';
    //case 'DateTime': // datetime is not accepted
    case 'LocalDateTime':
      //return 'TIMESTAMP'; //TODO: Fix ambiguity between timestamp & datetime
      return 'DATETIME';
    case 'LocalDate':
      return 'DATE';
    case 'Boolean':
      return 'BIT';
    case 'BigDecimal':
      return 'DECIMAL(12,4)';
    case 'String':
      return 'VARCHAR(512)'; //TODO: Fix hardcoded length
    default:
      console.log(`Couldn't translate "${i}" to SQL type, fallback to \`BIGINT\`.`);
      return 'BIGINT';
  }
};

export const sqlToJvmType = (i:string):DllType => {
  switch (i.toLowerCase()) {
    case 'int':
      return 'Int';
    case 'bigint':
      return 'Long';
    case 'timestamp':
      return 'LocalDateTime';
    case 'date':
      return 'LocalDate';
    case 'datetime':
      return 'LocalDateTime';
    case 'bit':
      return 'Boolean';
    case 'decimal':
      return 'BigDecimal';
    case 'float':
      return 'Double';
    case 'char':
    case 'text':
    case 'varchar':
      return 'String';
    default:
      throw new Error(`Couldn't translate "${i}" to JVM type.`)
  }
};

export const modelToSqlType = jvmToSqlType;
export const modelToJvmType = (x:DllType):DllType => x; // Currently equivalent

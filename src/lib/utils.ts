
const types = ['LocalDateTime', 'LocalDate', 'String', 'Int', 'BigDecimal', 'Double', 'Boolean'];

export const mapTypeToTs = (t:string) => {
  if (types.includes(t)) {
    switch (t) {
      case 'LocalDateTime':
      case 'LocalDate':
        return 'Date';
      case 'Int':
      case 'BigDecimal':
      case 'Double':
        return 'number';
      case 'Boolean':
        return 'boolean';
      default:
        return 'string';
    }
  }

  return `{id: number} | ${t}`;
}

export interface DataDefField {
  type: string,
  name: string,
  optional: boolean,
  column?: string
}

export interface DataDef {
  name: string,
  uuid: boolean,
  fields: DataDefField[]
}

export const generateInterface = (def: DataDef):string => {
  const { name, uuid: isUUid, fields } = def;
  const id:string= isUUid ? 'uuid: string' : 'id: number';

  const fs:string[] = fields.map(f => {
    const name = f.name;
    const optOut = f.optional ? '?' : '';
    const typeOut = mapTypeToTs(f.type);

    return `${name}${optOut}: ${typeOut}`
  })

  const fieldsTs:string = [id].concat(fs).join(',\n  ');

  return `export interface ${name} {
  ${fieldsTs}
}`
}

export const generateInterfaces = (defs: DataDef[]):string => defs.map(u => generateInterface(u)).join('\n\n');
import * as T from './type';

export const toOpenApiType = (t:string):T.OpenApiType => {
  switch (t) {
    case 'Int':
      return 'integer';
    case 'BigDecimal':
    case 'Double':
      return 'number';
    case 'Boolean':
      return 'boolean';
    default:
      return 'string';
  }
}

export const toUnit = (title:string, ddUnit:T.DdParams[]):T.OpenApiUnit => {
  const r :T.OpenApiUnit= {
    title,
    type: 'object',
    properties: {},
    required: []
  };

  ddUnit.map(l => {
    const type = toOpenApiType(l.type);
    r.properties[l.arg] = {type};

    if (!l.optional) {
      r.required.push(l.arg)
    }

    return null;
  });

  return r;
}

export const toOpenApiJson = (dd:T.DdEntity[]) :T.OpenApiSchema => {
  const r:T.OpenApiSchema = {};

  dd.map(l => {
    r[l.name] = toUnit(l.name, l.params);

    return null;
  });

  return r;
}

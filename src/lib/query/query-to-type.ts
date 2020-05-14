// utility to get the output type from a query inferred from the query
import {Projection, Query, References} from './type';
import * as T from '../type';

// todo: check that fields in the query are actually aligned with the model

export const findEntity = (parentEntity: string, field: string, model: T.DdEntity2[]):string => {
  const pe = model.find(x => x.name === parentEntity);

  if (!pe) {
    throw Error('parent entity cannot be found');
  }

  const f =  pe.fields.find(x => x.name === field);

  if (!f) {
    throw Error('field cannot be found');
  }

  return f.type
}

export const projectionToType = (entity: string, projection: Projection, model: T.DdEntity2[]):string => {
  const projKeys = Object.keys(projection);

  const listRef:string[] = projKeys.filter(k => {
    const v = projection[k];
    return typeof v === 'object';
  })
  .map(k => {
    const obj = projection[k];
    const entityChild = findEntity(entity, k, model);
    const ent = projectionToType(entityChild, obj as Projection, model)

    return ` & {${k}: ${ent}}`
  })

  const listPick = projKeys.filter(k => {
    const v = projection[k];
    return v === true;
  })

  if (listPick.length > 0) {
    return `Pick<${entity}, ${listPick.map(x => `'${x}'`).join(' | ')}>`
  }
  
  const listOmissions = projKeys.filter(k => {
    const v = projection[k];
    return v === false;
  })

  if (listOmissions.length > 0) {
    return `Omit<${entity}, ${listOmissions.map(x => `'${x}'`).join(' | ')}>`
  }

  return entity + listRef.join('')
}

export const paramsToType = (entity: string, projection: Projection, references: References, model: T.DdEntity2[]):string => {
  const rt = refTypes(references, model)
  return '(' + projectionToType(entity, projection, model) + rt + ')[]'
}

export const refTypes = (references:References, model: T.DdEntity2[]):string => {
  const refTypes = Object.keys(references).map(entity => {
    const projection:Projection = references[entity].projection || {};
    const p = paramsToType(entity, projection, {}, model); // here reference does not exist => {}
    return ` & {${entity}: ${p}}`
  });

  if (refTypes.length === 0) {
    return '';
  }

  return refTypes.join('')
}

export const queryToType = (q:Query, model: T.DdEntity2[]):string => {
 const r = Object.keys(q).map(entity => {
    const projection:Projection = q[entity].projection || {};
    const references:References = q[entity].references || {};
    const p = paramsToType(entity, projection, references, model);

    return `${entity}: ${p}`
  }).join(', ');

  return `{${r}}`
}
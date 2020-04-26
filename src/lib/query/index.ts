// mocking the query lib
import * as T from './type';
import * as TS from '../type';
import * as F from './fake'

export const fakeDataFromQuery = (query: T.Query, models: TS.DdEntity2[]):{[k:string]:any[]} => {
  return Object.keys(query).map(entityName => {
    const v = query[entityName];
    return fakeDataFromParams(entityName, v, models);
  })
  // merge the different objects
  .reduce((result, current) => {
    return Object.assign(result, current);
  }, {});
}

export const fakeDataFromParams = (entityName: string, params: T.Params, models: TS.DdEntity2[]):{[entityName:string]: any[]} => {
  const model = models.find(x => x.name === entityName);

  if (!model) {
    throw Error('could not find model');
  }

  // get between 1 and nmax rows
  const nMax = 5
  const nRows = Math.ceil(nMax*Math.random())
  const rows = new Array(nRows).fill(0).map(x => {
    return rowAndProjection(model.fields, params.projection || {}, models);
  })
  
  return {[entityName]: rows};
}

export const rowAndProjection = (rowDef: TS.DdParams2[], projection: T.Projection, models: TS.DdEntity2[] = []):{[k:string]: any} => {
  const r = F.row(rowDef);

  // console.log(projection)

  Object.keys(projection).map(k => {
    const v:boolean | T.Projection = projection[k];

    if (v === false) {
      delete(r[k]);
    }

    if (typeof v === 'object') {
      const entityDef = rowDef.find(x => x.name === k);
      if (!entityDef) {
        throw Error('could not find associated entity' + k + ' - ' + JSON.stringify(rowDef));
      }

      const entityName:string = entityDef.type;
      // console.log(entityDef)
      const model = models.find(x => x.name === entityName);

      if (!model) {
        throw Error('could not find model');
      }
      
      r[k] = rowAndProjection(model.fields, v, models);
    }
  })

  return r;
}


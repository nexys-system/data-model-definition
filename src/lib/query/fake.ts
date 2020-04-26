import * as T from '../type';
import * as TQ from './type';

const makeRandomString = (length:number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

/**
 * see https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
 */
export const uuid = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const string = ():string => {
  return makeRandomString(12) //'fake';
}

export const integer = ():number => {
  return Math.round(float());
}

export const float = ():number => {
  return 100*Math.random();
}

export const boolean = ():boolean => {
  return Boolean(Math.round(Math.random()));
}

export const date = ():Date => {
  //3,156,192
  const lowerBound = 1420070400000 // new Date('2015-01-01').getTime();
  //const upperBound = 1735689600000 // new Date('2025-01-01').getTime();
  const nYears = 10;
  const delta = nYears * 365.75 * 3600 * 1000 // add 10 years
  const newTime = delta * Math.random() + lowerBound;
  const d = new Date(newTime);
  return d;
}

export const any = (type:string, optional: boolean = false) => {
  if (optional && boolean()) {
    return undefined;
  }

  switch (type) {
    case 'Int':
      return integer();
    case 'Float':
      return float();
    case 'Boolean':
      return boolean();
    case 'LocalDateTime':
      return date();
    default:
      return string();
  }
}

export const row = (rowDef: T.DdParams2[], isUuid: boolean = false) => {
  const o:{[k:string]: any} = {id: integer()};

  if(isUuid) {
    o['uuid'] = uuid();
  } else {
    o['id'] = integer();
  }

  rowDef.map(r => {
    const a = any(r.type, r.optional);
    if (a !== undefined) {
      o[r.name] = a;
    }
  });

  return o;
}

export const rowAndProjection = (rowDef: T.DdParams2[], projection: TQ.Projection) => {
  const r = row(rowDef);

  Object.keys(projection).map(k => {
    const v:boolean | TQ.Projection = projection[k];

    if (v === false) {
      delete(r[k]);
    }
  })

  return r;
}
import Joi from '@hapi/joi';
import * as T from './type';
import {JoiOut} from './joi-type';


export const getType = (typeName:string):JoiOut => {
  switch(typeName) {
    case 'String':
      return Joi.string();
    case 'Boolean':
      return Joi.boolean();
    case 'Int':
    case 'BigDecimal':
    case 'Double':
      return Joi.number();
    case 'LocalDateTime':
      return Joi.date();
    case 'LocalDate':
      return Joi.string();
    default:
      console.warn(`The type "${typeName}" could not be converted to Joi, this may create some errors`);
      return Joi.string();
  }
}

export const appendOptional = (j:JoiOut, optional:boolean = false):JoiOut => {
  if (!optional) {
    return j.required();
  }

  return j;
}

/**
 * [description]
 * @param  {[type]} dd      [description]
 * @param  {Array}  optouts list of arguments that need to be ignored (e.g. logdateadeed)
 * @return {[type]}         [description]
 */
export const schemaFromDd = (dd:T.DdParams[], optouts:string[] = []):{[name:string]:JoiOut} => {
  const r:{[name:string]:JoiOut} = {};

  dd.map(line => {
    const name:string = line.arg;

    if (!optouts.includes(name)) {
      r[name] = appendOptional(getType(line.type), line.optional);
    }

    return null;
  });

  return r;
}
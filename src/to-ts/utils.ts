import { generateInterface, DataDef, generateInterfaces } from '../lib/utils';
import { schemaTextFromDd } from '../lib/joi-utils'
import { DdParams2 } from '../lib/type';

export const getOutput = (content: string):string => {
  const j = JSON.parse(content)
  const isArray = Array.isArray(j);

  if (isArray) {
    return generateInterfaces(j as DataDef[]);
  } else {
    if(j.entities) {
      return generateInterfaces(j.entities as DataDef[]);
    } else {
      return generateInterface(j as DataDef);
    }
  }
}

export const getJoiSchema = (content: string):string => {
  const j = JSON.parse(content)


  return schemaTextFromDd(j as DdParams2[]);
}
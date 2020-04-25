import { generateInterface, DataDef, generateInterfaces } from '../lib/utils';

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
import JSYaml from 'js-yaml';

export const toYaml = (j:any):string => JSYaml.safeDump(j);

export const toJson = (j:string):any => JSYaml.safeLoad(j);

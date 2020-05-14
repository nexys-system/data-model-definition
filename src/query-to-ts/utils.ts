import * as QT from '../lib/query/query-to-type';
import { schemaTextFromDd } from '../lib/joi-utils'
import { DdParams2 } from '../lib/type';

export const getOutput = (query: string, model: string):string => {
  const jQuery = JSON.parse(query)
  const jModel = JSON.parse(model)
  

  return QT.queryToType(jQuery, jModel)
}

export const getJoiSchema = (content: string):string => {
  const j = JSON.parse(content)


  return schemaTextFromDd(j as DdParams2[]);
}
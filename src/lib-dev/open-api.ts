import * as Y from './yaml';
import * as T from '../lib/type';
import * as OA from '../lib/open-api'

export const toOpenApi = (dd:T.DdEntity[]):string => Y.toYaml(OA.toOpenApiJson(dd));

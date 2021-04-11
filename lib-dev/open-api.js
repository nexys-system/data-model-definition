import * as Y from "./yaml.js";
import * as OA from "../lib/open-api.js";
export const toOpenApi = (dd) => Y.toYaml(OA.toOpenApiJson(dd));

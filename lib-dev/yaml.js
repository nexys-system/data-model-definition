import JSYaml from "../_snowpack/pkg/js-yaml.js";
export const toYaml = (j) => JSYaml.safeDump(j);
export const toJson = (j) => JSYaml.safeLoad(j);

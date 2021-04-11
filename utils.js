export const isJson = (j) => {
  try {
    JSON.parse(j);
    return true;
  } catch (err) {
    return false;
  }
};
export const ghUrl = "https://github.com/nexys-system/data-model-definition";

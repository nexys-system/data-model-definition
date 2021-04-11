const makeRandomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const uuid = () => Math.random().toString(36).substring(2) + Date.now().toString(36);
export const string = () => {
  return makeRandomString(12);
};
export const integer = () => {
  return Math.round(float());
};
export const float = () => {
  return 100 * Math.random();
};
export const boolean = () => {
  return Boolean(Math.round(Math.random()));
};
export const date = () => {
  const lowerBound = 14200704e5;
  const nYears = 10;
  const delta = nYears * 365.75 * 3600 * 1e3;
  const newTime = delta * Math.random() + lowerBound;
  const d = new Date(newTime);
  return d;
};
export const any = (type, optional = false) => {
  if (optional && boolean()) {
    return void 0;
  }
  switch (type) {
    case "Int":
      return integer();
    case "Float":
      return float();
    case "Boolean":
      return boolean();
    case "LocalDateTime":
      return date();
    default:
      return string();
  }
};
export const row = (rowDef, isUuid = false) => {
  const o = {id: integer()};
  if (isUuid) {
    o["uuid"] = uuid();
  } else {
    o["id"] = integer();
  }
  rowDef.forEach((r) => {
    const a = any(r.type, r.optional);
    if (a !== void 0) {
      o[r.name] = a;
    }
  });
  return o;
};

import { DdParams2, DllType } from "../type";

const getTypeFromSql = (s: string): DllType => {
  const sl = s.toLowerCase();
  if (sl.includes("bigint")) {
    return "Int";
  }

  if (sl.includes("timestamp")) {
    return "LocalDateTime";
  }

  if (sl.includes("mediumtext")) {
    return "String";
  }

  if (sl.includes("tinyint") || sl.includes("varchar")) {
    return "Boolean";
  }

  throw Error('could not map sql type "' + s + '" to non sql type');
};

export const tableFieldToField = (fieldDef: string): DdParams2 => {
  const f = fieldDef.trim().split("|");
  if (f.length < 6) {
    throw Error("could not");
  }

  const [_, pname, sqlType, isDefault] = f;
  const name = pname.trim();
  const optional: boolean = isDefault.trim() === "NO" ? false : true;
  const type = getTypeFromSql(sqlType);

  return { name, type, optional };
};

export const tableDefToFields = (sqlDef: string): DdParams2[] => {
  const t = sqlDef.trimEnd().split("\n");

  return t
    .filter((x) => {
      const p = x.trim().substr(0, 7);

      const b = p === "| Field" || p === "+------" || p === "| id   ";

      return !b;
    })
    .map(tableFieldToField);
};

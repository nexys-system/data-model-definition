const types = ["LocalDateTime", "LocalDate", "String", "Int", "BigDecimal", "Double", "Boolean"];
export const mapTypeToTs = (t) => {
  if (types.includes(t)) {
    switch (t) {
      case "LocalDateTime":
      case "LocalDate":
        return "Date";
      case "Int":
      case "BigDecimal":
      case "Double":
        return "number";
      case "Boolean":
        return "boolean";
      default:
        return "string";
    }
  }
  return `{id: number} | ${t}`;
};
export const generateInterface = (def) => {
  const {name, uuid: isUUid, fields} = def;
  const id = isUUid ? "uuid: string" : "id: number";
  const fs = fields.map((f) => {
    const name2 = f.name;
    const optOut = f.optional ? "?" : "";
    const typeOut = mapTypeToTs(f.type);
    return `${name2}${optOut}: ${typeOut}`;
  });
  const fieldsTs = [id].concat(fs).join(",\n  ");
  return `export interface ${name} {
  ${fieldsTs}
}`;
};
export const generateInterfaces = (defs) => defs.map((u) => generateInterface(u)).join("\n\n");

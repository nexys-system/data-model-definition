export const jvmTypes = ["Int", "Long", "Double", "LocalDateTime", "LocalDate", "Boolean", "BigDecimal", "String"];
export const jvmToSqlType = (i) => {
  switch (i) {
    case "Int":
      return "INT";
    case "Long":
      return "BIGINT";
    case "Double":
      return "FLOAT";
    case "LocalDateTime":
      return "DATETIME";
    case "LocalDate":
      return "DATE";
    case "Boolean":
      return "BIT";
    case "BigDecimal":
      return "DECIMAL(12,4)";
    case "String":
      return "VARCHAR(512)";
    default:
      console.log(`Couldn't translate "${i}" to SQL type, fallback to \`BIGINT\`.`);
      return "BIGINT";
  }
};
export const sqlToJvmType = (i) => {
  switch (i.toLowerCase()) {
    case "int":
      return "Int";
    case "bigint":
      return "Long";
    case "timestamp":
      return "LocalDateTime";
    case "date":
      return "LocalDate";
    case "datetime":
      return "LocalDateTime";
    case "bit":
      return "Boolean";
    case "decimal":
      return "BigDecimal";
    case "float":
      return "Double";
    case "char":
    case "text":
    case "varchar":
      return "String";
    default:
      throw new Error(`Couldn't translate "${i}" to JVM type.`);
  }
};
export const modelToSqlType = jvmToSqlType;
export const modelToJvmType = (x) => x;

import { DdParams2 } from "../type";
import * as I from "./index";

test("tableDefToFields", () => {
  expect(
    I.tableDefToFields(`+----------------------+--------------+------+-----+---------------------+-----------------------------+
  | Field                | Type         | Null | Key | Default             | Extra                       |
  +----------------------+--------------+------+-----+---------------------+-----------------------------+
  | id                   | bigint(20)   | NO   | PRI | NULL                | auto_increment              |
  | date                 | timestamp    | NO   |     | CURRENT_TIMESTAMP   | on update CURRENT_TIMESTAMP |
  | date_send_out        | timestamp    | NO   |     | 1999-12-31 23:00:00 |                             |
  | date_reminder        | timestamp    | YES  |     | NULL                |                             |
  | date_close           | timestamp    | NO   |     | CURRENT_TIMESTAMP   |                             |
  | meeting_point        | mediumtext   | NO   |     | NULL                |                             |
  | group_size           | bigint(20)   | NO   |     | NULL                |                             |
  | type_id              | bigint(20)   | NO   |     | NULL                |                             |
  | name                 | mediumtext   | NO   |     | NULL                |                             |
  | user_id              | bigint(20)   | NO   | MUL | NULL                |                             |
  | comment              | mediumtext   | YES  |     | NULL                |                             |
  | keyy                 | mediumtext   | NO   |     | NULL                |                             |
  | email_title          | mediumtext   | NO   |     | NULL                |                             |
  | email_body           | mediumtext   | NO   |     | NULL                |                             |
  | invitation_text      | mediumtext   | NO   |     | NULL                |                             |
  | send_email_title     | mediumtext   | NO   |     | NULL                |                             |
  | send_email_body      | mediumtext   | NO   |     | NULL                |                             |
  | lang                 | mediumtext   | NO   |     | NULL                |                             |
  | location_id          | bigint(20)   | NO   |     | NULL                |                             |
  | status_id            | bigint(20)   | NO   |     | NULL                |                             |
  | date_added           | timestamp    | NO   |     | CURRENT_TIMESTAMP   |                             |
  | is_email_html        | tinyint(1)   | YES  |     | 0                   |                             |
  | email_body_html      | mediumtext   | NO   |     | NULL                |                             |
  | is_send_email_html   | tinyint(1)   | YES  |     | 0                   |                             |
  | send_email_body_html | mediumtext   | NO   |     | NULL                |                             |
  | email_from           | varchar(128) | YES  |     | NULL                |                             |
  +----------------------+--------------+------+-----+---------------------+-----------------------------+`)
  ).toEqual([
    { name: "date", optional: false, type: "LocalDateTime" },
    { name: "date_send_out", optional: false, type: "LocalDateTime" },
    { name: "date_reminder", optional: true, type: "LocalDateTime" },
    { name: "date_close", optional: false, type: "LocalDateTime" },
    { name: "meeting_point", optional: false, type: "String" },
    { name: "group_size", optional: false, type: "Int" },
    { name: "type_id", optional: false, type: "Int" },
    { name: "name", optional: false, type: "String" },
    { name: "user_id", optional: false, type: "Int" },
    { name: "comment", optional: true, type: "String" },
    { name: "keyy", optional: false, type: "String" },
    { name: "email_title", optional: false, type: "String" },
    { name: "email_body", optional: false, type: "String" },
    { name: "invitation_text", optional: false, type: "String" },
    { name: "send_email_title", optional: false, type: "String" },
    { name: "send_email_body", optional: false, type: "String" },
    { name: "lang", optional: false, type: "String" },
    { name: "location_id", optional: false, type: "Int" },
    { name: "status_id", optional: false, type: "Int" },
    { name: "date_added", optional: false, type: "LocalDateTime" },
    { name: "is_email_html", optional: true, type: "Boolean" },
    { name: "email_body_html", optional: false, type: "String" },
    { name: "is_send_email_html", optional: true, type: "Boolean" },
    { name: "send_email_body_html", optional: false, type: "String" },
    { name: "email_from", optional: true, type: "Boolean" },
  ]);
});

test("tableFieldToField", () => {
  const row: DdParams2 = { name: "id", type: "Int", optional: false };
  expect(
    I.tableFieldToField(
      "| id                   | bigint(20)   | NO   | PRI | NULL                | auto_increment              |"
    )
  ).toEqual(row);
});

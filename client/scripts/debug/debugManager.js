import SqlFiller from "../sql/sqlFiller.js";

export default class DebugManager {
  constructor(debugParams, data) {
    this.debugParams = debugParams;
    this.data = data;
    this.sqlFiller = new SqlFiller(this.debugParams.DBNAME);
  }

  debug() {
    if (this.debugParams.JSON_DEBUG) {
      console.log(JSON.stringify(this.data, null, '  '));
    }

    if (this.debugParams.SQL_DEBUG) {
      console.log(this.sqlFiller.toSqlInsert(this.data));
    }
  }
}
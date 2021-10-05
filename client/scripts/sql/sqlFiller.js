import * as sql from './sql.js'

export default class SqlFiller {
  constructor(dbName) {
    this.dbName = dbName;
  }

  toSqlInsert(data) {
    let result = '';
    for (let tableName in data) {
      result += sql.toSqlInsert(this.dbName, tableName, data[tableName]);
      result += '\n';
    }

    return result;
  }
}
export default class RestoreFromJson {
  static parse(jsonString) {
    let result = JSON.parse(jsonString);
    return this.castToDate(result);
  }

  static castToDate(data) {
    let result = JSON.parse(JSON.stringify(data));

    for (let tableName in result) {
      if (!result.hasOwnProperty(tableName)) {
        throw new Error('data has not property ' + tableName);
      }

      result[tableName].forEach(row => {
        for (let column in row) {
          if (!row.hasOwnProperty(column)) {
            throw new Error('row in data has not property ' + column);
          }

          let str = String(row[column]);
          if (str.match(/-.{0,}-/g) === null) {
            continue;
          }

          let date = Date.parse(str);
          if (!isNaN(date) && date > 0) {
            row[column] = new Date(date);
          }
        }
      });
    }

    return result;
  }
}
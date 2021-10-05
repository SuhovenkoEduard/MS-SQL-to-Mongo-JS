export function toSqlValue(value) {
  if (typeof (value) === 'number')
    return value;

  if (typeof (value) === 'string') {
    return '\'' + value + '\'';
  }

  if (value === null) {
    return value;
  }

  function normilize(x, length) {
    while (x.length < length) {
      x = '0' + x;
    }

    return x;
  }

  let day = normilize((value.getDate()).toString(), 2);
  let month = normilize((value.getMonth() + 1).toString(), 2);
  let year = normilize((value.getFullYear()).toString(), 4);
  return '\'' + year + '-' + month + '-' + day + '\'';
}

export function toSqlInsert(dbName, tableName, tableData, skipIdFlag = true) {
  let sql_query = 'INSERT INTO ' + dbName + '.dbo.' + tableName + ' (';
  let columns = Object.getOwnPropertyNames(tableData[0]);

  if (skipIdFlag) {
    columns = columns.filter(x => x !== 'Id');
  }

  sql_query += columns[0];
  for (let column of columns.slice(1)) {
    sql_query += ', ' + column;
  }
  sql_query += ')\n';

  function addRow(row) {
    sql_query += '(';
    let values = columns.map(x => row[x]);
    sql_query += toSqlValue(values[0]);
    for (let value of values.slice(1)) {
      sql_query += ', ' + toSqlValue(value);
    }
    sql_query += ')';
  }

  sql_query += 'VALUES \n';
  addRow(tableData[0]);
  tableData.slice(1).forEach(row => {
    sql_query += ',\n';
    addRow(row);
  });

  return sql_query;
}
import Query1 from "./query1.js"
import Query2 from "./query2.js";
import Query3 from "./query3.js";
import Query4 from "./query4.js";
import Query5 from "./query5.js";
import Query6 from "./query6.js";
import Query7 from "./query7.js";
import Query8 from "./query8.js";
import Query9 from "./query9.js";

export default class Queries {
  static createNext(data) {
    let queries = [
      new Query1(data),
      new Query2(data),
      new Query3(data),
      new Query4(data),
      new Query5(data),
      new Query6(data),
      new Query7(data),
      new Query8(data),
      new Query9(data),
    ];

    return [
      ...queries.map(query => {
        return {
          title: query.title,
          result: query.execute()
        };
      })
    ];
  }
}

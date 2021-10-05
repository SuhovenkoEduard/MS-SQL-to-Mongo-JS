import Query1 from "./query1.js";

export default class Query7 {
  constructor(data) {
    this.title = '7. Находился в прокате дольше всех';
    this.data = data;
  }

  execute() {
    return new Query1(this.data).execute();
  }
}
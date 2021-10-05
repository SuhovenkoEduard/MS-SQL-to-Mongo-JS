export default class Query3 {
  constructor(data) {
    this.title = '3. Самая частая марка в прокате';
    this.data = data;
  }

  execute() {
    let result = this.data.Orders.map(order => {
      return {
        markId: this.data.Cars.filter(car => car.Id === order.CarId)
          .map(car => car.MarkId)[0]
      };
    });

    result = [...new Set(result.map(x => x.markId))].map(markId => {
      return {
        markId,
        count: result.filter(y => y.markId === markId).length
      };
    });

    result = result.reduce((x, y) => x.count < y.count ? y : x);

    return result;
  }
}
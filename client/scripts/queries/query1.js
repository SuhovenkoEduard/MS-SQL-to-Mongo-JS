export default class Query1 {
  constructor(data) {
    this.title = '1. Автомобиль с максимально долгим прокатом';
    this.data = data;
  }

  execute() {
    return this.data.Cars.map(car => {
      let sumTime = 0;
      let periods = this.data.Orders.filter(order => order.Refunded === 'true' && order.CarId === car.Id)
          .map(x => (x.DateOfRefund - x.DateOfIssue) / 1000 / 60 / 60);
      if (periods.length > 0) {
        sumTime += periods.reduce((x, y) => x + y);
      }

      return {
        carId: car.Id,
        inRefund: sumTime
      };
    }).reduce((x, y) => x.inRefund < y.inRefund ? y : x);
  }
}
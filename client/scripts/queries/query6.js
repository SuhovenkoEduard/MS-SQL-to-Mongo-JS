export default class Query6 {
  constructor(data) {
    this.title = '6. Время в прокате каждого автомобиля';
    this.data = data;
  }

  execute() {
    let carPeriods = this.data.Cars.map(car => {
      return {
        carId: car.Id,
        periods: this.data.Orders.filter(order =>
          order.CarId === car.Id &&
          order.Refunded === 'true')
          .map(order => order.DateOfRefund - order.DateOfIssue)
          .map(time => time / 1000 / 60 / 60)
      };
    });

    return carPeriods.map(carPeriod => {
      return {
        carId: carPeriod.carId,
        inRefund: (() => {
          let result = 0;
          if (carPeriod.periods.length > 0) {
            result = carPeriod.periods
              .reduce((x, y) => x + y)
          }
          return result;
        })()
      };
    });
  }
}
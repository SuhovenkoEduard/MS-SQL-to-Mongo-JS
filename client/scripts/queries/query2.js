export default class Query2 {
  constructor(data) {
    this.title = '2. Автомобили, которые ни разу не были в прокате';
    this.data = data;
  }

  execute() {
    return this.data.Cars
      .filter(car => !this.data.Orders.some(x => x.CarId === car.Id))
      .map(x => {
        return {
          carId: x.Id
        };
      });
  }
}
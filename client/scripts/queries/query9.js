export default class Query9 {
  constructor(data) {
    this.title = '9. Средний возраст автомобилей компании';
    this.data = data;
  }

  execute() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let carYears = this.data.Cars.map(car => {
      return {
        carId: car.Id,
        age: currentYear - car.YearOfRelease
      };
    });

    return carYears
      .map(x => x.age)
      .reduce((x, y) => x + y) / carYears.length;
  }
}
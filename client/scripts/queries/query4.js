export default class Query4 {
  constructor(data) {
    this.title = '4. Автомобиль с макимальным пробегом';
    this.data = data;
  }

  execute() {
    let maxMileage = Math.max(...this.data.Cars.map(car => car.Mileage));
    return this.data.Cars.filter(car => car.Mileage === maxMileage)
      .map(car => {
        return {
          carId: car.Id,
          mileage: car.Mileage
        };
      });
  }
}
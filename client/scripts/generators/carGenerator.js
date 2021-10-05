import Generator from "./generator.js";

export default class CarGenerator extends Generator {
  constructor(carInfo, marks) {
    super();
    this.technicalSpecifications = carInfo.technicalSpecifications;
    this.registryNumbers = carInfo.registryNumbers;
    this.descriptions = carInfo.descriptions;
    this.bodyNumbers = carInfo.bodyNumbers;
    this.engineNumbers = carInfo.engineNumbers;
    this.yearsOfRelease = carInfo.yearsOfRelease;
    this.mileages = carInfo.mileages;
    this.carPrices = carInfo.carPrices;
    this.rentalPrices = carInfo.rentalPrices;
    this.datesOfLastMaintenance = carInfo.datesOfLastMaintenance;
    this.marks = marks;
  }

  generate() {
    let result = [];
    for (let i = 0; i < this.registryNumbers.length; ++i) {
      let car = {
        Id: (i + 1),
        TechnicalSpecification: this.getRandomFromArray(this.technicalSpecifications),
        RegistryNumber: this.registryNumbers[i],
        Description: this.getRandomFromArray(this.descriptions),
        BodyNumber: this.getRandomFromArray(this.bodyNumbers),
        EngineNumber: this.getRandomFromArray(this.engineNumbers),
        YearOfRelease: this.getRandomFromArray(this.yearsOfRelease),
        Mileage: this.getRandomFromArray(this.mileages),
        CarPrice: this.getRandomFromArray(this.carPrices),
        RentalPrice: this.getRandomFromArray(this.rentalPrices),
        DateOfLastMaintenance: this.getRandomFromArray(this.datesOfLastMaintenance),
        MarkId: this.getRandomFromArray(this.marks).Id
      };

      result.push(car);
    }

    return result;
  }
}
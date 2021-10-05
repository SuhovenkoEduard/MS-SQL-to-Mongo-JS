import Generator from "./generator.js";

export default class PlaceGenerator extends Generator {
  constructor(placeInfo) {
    super();
    this.placeNames = placeInfo.placeNames;
    this.maxSalary = placeInfo.maxSalary;
    this.descriptions = placeInfo.descriptions;
  }

  generate() {
    let result = [];
    for (let i = 0; i < this.placeNames.length; ++i) {
      let place = {
        Id: (i + 1),
        Name: this.placeNames[i],
        Salary: this.getRandom(this.maxSalary),
        Description: this.getRandomFromArray(this.descriptions)
      };

      result.push(place);
    }

    return result;
  }
}
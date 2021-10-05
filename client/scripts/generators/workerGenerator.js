import Generator from "./generator.js";

export default class WorkerGenerator extends Generator {
  constructor(workerInfo, places) {
    super();
    this.passports = workerInfo.passports;
    this.places = places;
  }

  generate() {
    let result = [];
    for (let i = 0; i < this.passports.length; ++i) {
      let worker = {
        Id: (i + 1),
        FullName: this.passports[i].FullName,
        Passport: this.passports[i].Passport,
        PlaceId: this.getRandomFromArray(this.places).Id
      };

      result.push(worker);
    }

    return result;
  }
}
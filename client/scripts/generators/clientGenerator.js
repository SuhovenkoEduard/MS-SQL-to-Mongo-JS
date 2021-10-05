import Generator from "./generator.js";

export default class ClientGenerator extends Generator {
  constructor(clientInfo) {
    super();
    this.passports = clientInfo.passports;
    this.adresses = clientInfo.adresses;
    this.phoneNumbers = clientInfo.phoneNumbers;
  }

  generate() {
    let result = [];
    for (let i = 0; i < this.passports.length; ++i) {
      let client = {
        Id: (i + 1),
        FullName: this.passports[i].FullName,
        Adress: this.getRandomFromArray(this.adresses),
        PhoneNumber: this.getRandomFromArray(this.phoneNumbers),
        Passport: this.passports[i].Passport
      };

      result.push(client);
    }

    return result;
  }
}
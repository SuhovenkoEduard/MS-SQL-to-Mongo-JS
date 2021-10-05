import Generator from "./generator.js";

export default class MarkGenerator extends Generator {
  constructor(markInfo) {
    super();
    this.markNames = markInfo.markNames;
    this.descriptions = markInfo.descriptions;
  }

  generate() {
    let result = [];
    for (let i = 0; i < this.markNames.length; ++i) {
      let mark = {
        Id: (i + 1),
        Name: this.markNames[i],
        Description: this.getRandomFromArray(this.descriptions)
      };

      result.push(mark);
    }

    return result;
  }
}
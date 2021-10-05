export default class Generator {
  generate() {
    throw new Error('Generator must be implemented');
  }

  getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  getRandomFromArray(array) {
    return array[this.getRandom(array.length)];
  }
}
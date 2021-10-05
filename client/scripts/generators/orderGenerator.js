import Generator from "./generator.js";

export default class OrderGenerator extends Generator {
  constructor(orderInfo, cars, clients, workers) {
    super();
    this.refundeds = orderInfo.refundeds;
    this.dates = orderInfo.dates;
    this.durations = orderInfo.durations;
    this.cars = cars;
    this.clients = clients;
    this.workers = workers;
  }

  generate(size) {
    let result = [];
    for (let i = 0; i < size; ++i) {
      let dates = this.getRandomFromArray(this.dates);
      let refunded = this.getRandomFromArray(this.refundeds);
      let dateOfIssue = new Date(dates.DateOfIssue);
      let dateOfRefund = new Date(dates.DateOfRefund);

      if (refunded === 'false') {
        dateOfRefund = null;
      }

      let order = {
        Id: (i + 1),
        Refunded: refunded,
        DateOfIssue: dateOfIssue,
        DateOfRefund: dateOfRefund,
        Duration: this.getRandomFromArray(this.durations),
        CarId: this.getRandomFromArray(this.cars).Id,
        ClientId: this.getRandomFromArray(this.clients).Id,
        WorkerId: this.getRandomFromArray(this.workers).Id
      };

      result.push(order);
    }

    return result;
  }
}
export default class Query8 {
  constructor(data) {
    this.title = '8. Клиенты не вернувшие автомобиль вовремя';
    this.data = data;
  }

  execute() {
    let clientIds = this.data.Orders.filter(order =>
      order.Refunded === 'false')
      .map(order => {
        return {
          clientId: order.ClientId
        }
      });

    clientIds = [...new Set(clientIds.map(x => x.clientId))]
      .map(x => {
        return {
          clientId: x
        };
      });

    return clientIds;
  }
}
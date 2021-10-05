export default class Query5 {
  constructor(data) {
    this.title = '5. Клиенты, обращавшиеся в прокат > 2 раз';
    this.data = data;
  }

  execute() {
    let clientIds = this.data.Orders.map(order => {
      return {
        clientId: order.ClientId
      };
    });

    let clientsCount = [...new Set(clientIds.map(x => x.clientId))]
      .map(id => {
        return {
          clientId: id,
          count: clientIds.filter(x => x.clientId === id).length
        };
      });

    return clientsCount.filter(x => x.count > 2);
  }
}
export default class OrderInfo {
  static createNext() {
    return {
      refundeds: [
        'true',
        'false'
      ],

      dates: OrderInfo.getDates(20),
      
      durations: [
        ...(() => {
          let result = [];
          let count = 20;
          for (let i = 0; i < count; ++i) {
            result.push(Math.floor(Math.random() * 100));
          }

          return result;
        })()
      ]
    };
  }

  static getDates(count) {
    let result = [];
    for (let i = 0; i < count; ++i) {
      let day = Math.floor(Math.random() * 31);
      let month = Math.floor(Math.random() * 11);
      let year = Math.floor(Math.random() * 20) + 2000;
      let dateOfIssue = new Date(year, month, day);
      let dateOfRefund = new Date(year, month, day);
      dateOfRefund.setDate(dateOfRefund.getDate()
        + Math.floor(Math.random() * 30));

      result.push({
        DateOfIssue: dateOfIssue,
        DateOfRefund: dateOfRefund,
      });
    }

    return result;
  }
};
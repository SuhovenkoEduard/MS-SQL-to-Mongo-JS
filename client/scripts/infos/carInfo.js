export default class CarInfo {
  static createNext() {
    return {
      technicalSpecifications: [
        'Max speed 110.',
        'Max speed 120.',
        'Max speed 140.',
        'Max speed 160.',
        'Max speed 200.',
        'Max speed 250.'
      ],

      registryNumbers: [
        3974,
        8496,
        1555,
        3214,
        2866,
        4710,
        7113,
        2041,
        1876,
        7621
      ],

      descriptions: [
        'Green',
        'Yellow',
        'Brown',
        'Black',
        'White',
        'Purple',
        'Orange'
      ],

      bodyNumbers: [
        '57574',
        '80020',
        '99982',
        '99812',
        '27959',
        '81918',
        '42667',
        '36791',
        '76756',
        '56087'
      ],

      engineNumbers: [
        '127',
        '802',
        '632',
        '116',
        '643',
        '684',
        '904',
        '882',
        '111',
        '204'
      ],

      yearsOfRelease: [
        ...(() => {
          let result = [];
          let count = 40;
          let currentYear = (new Date()).getFullYear();
          for (let year = currentYear - count; year < currentYear; ++year) {
            result.push(year);
          }

          return result;
        })()
      ],

      mileages: [
        7587,
        2870,
        347,
        3168,
        831,
        2078,
        9527,
        2251,
        8370,
        575
      ],

      carPrices: [
        '35146',
        '19288',
        '48655',
        '35437',
        '13892',
        '13972',
        '32731',
        '18330',
        '35897',
        '19794',
        '18708',
        '33384',
        '10218',
        '37860',
        '48695',
        '37217',
        '39378',
        '31437',
        '6729',
        '46953'
      ],

      rentalPrices: [
        '481',
        '36',
        '49',
        '781',
        '802',
        '922',
        '330',
        '583',
        '548',
        '973',
        '329',
        '351',
        '274',
        '96',
        '987'
      ],

      datesOfLastMaintenance: [
        ...(() => {
          let count = 20;
          let dates = [];
          for (let i = 0; i < count; ++i) {
            let day = Math.floor(Math.random() * 31);
            let month = Math.floor(Math.random() * 11);
            let year = Math.floor(Math.random() * 40) + 1980;
            dates.push(new Date(year, month, day));
          }
          return dates;
        })()
      ]
    };
  }
}

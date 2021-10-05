export default class ClientInfo {
  static createPassport(fullname, passportNumber) {
    return {
      FullName: fullname,
      Passport: passportNumber
    };
  }

  static createNext() {
    return {
      passports: [
        ClientInfo.createPassport('Алексеев Евдоким', '4546 777316'),
        ClientInfo.createPassport('Ерёменко Рафаил', '4361 510084'),
        ClientInfo.createPassport('Грабчак Чарльз', '4464 984392'),
        ClientInfo.createPassport('Бирюков Ян', '4114 741031'),
        ClientInfo.createPassport('Лазарев Шарль', '4073 490158')
      ],

      phoneNumbers: [
        ...(() => {
          let count = 20;
          let phoneNumberSize = 7;
          let result = [];
          for (let i = 0; i < count; ++i) {
            let phoneNumber = '+375';
            phoneNumber += (Math.floor(Math.random() * 2) ? '29' : '25');
            for (let j = 0; j < phoneNumberSize; ++j) {
              phoneNumber += Math.floor(Math.random() * 10);
            }

            result.push(phoneNumber);
          }

          return result;
        })()
      ],

      adresses: [
        ...(() => {
          let result = [];
          let count = 20;
          for (let i = 0; i < count; ++i) {
            let adress = 'Belarus, ';
            adress += Math.floor(Math.random() * 100);

            result.push(adress);
          }

          return result;
        })()
      ]
    };
  }
}
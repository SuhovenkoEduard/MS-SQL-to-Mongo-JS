export default class WorkerInfo {
  static createPassport(fullName, passportNumber) {
    return {
      FullName: fullName,
      Passport: passportNumber
    };
  }

  static createNext() {
    return {
      passports: [
        WorkerInfo.createPassport('Павлик Феликс', '4585 803859'),
        WorkerInfo.createPassport('Мухин Устин', '4234 805030'),
        WorkerInfo.createPassport('Князев Кир', '4311 909220'),
        WorkerInfo.createPassport('Павлов Остин', '4725 973258'),
        WorkerInfo.createPassport('Шестаков Спартак', '4397 540267'),
        WorkerInfo.createPassport('Шуфрич Цилла', '4397 540267'),
        WorkerInfo.createPassport('Фёдорова Фаина', '4282 647644'),
        WorkerInfo.createPassport('Кравченко Таисия', '4282 647644'),
        WorkerInfo.createPassport('Житар Цилла', '4632 320797'),
        WorkerInfo.createPassport('Цветкова Клара', '4444 164175')
      ]
    };
  }
}

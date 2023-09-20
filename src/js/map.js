export default class ErrorRepository {
  constructor() {
    const errors = [
      [100, 'Ошибка 100'],
      [101, 'Ошибка 101'],
      [102, 'Ошибка 102'],
      [103, 'Ошибка 103'],
      [104, 'Ошибка 104'],
    ];
    this.repository = new Map(errors);
  }

  translate(code) {
    if (this.repository.has(code)) return this.repository.get(code);
    throw new Error('Unknown error');
  }
}

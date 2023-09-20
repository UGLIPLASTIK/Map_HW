import ErrorRepository from '../map';

const errors = [
  [100, 'Ошибка 100'],
  [101, 'Ошибка 101'],
  [102, 'Ошибка 102'],
  [103, 'Ошибка 103'],
  [104, 'Ошибка 104'],
];
const expectRepo = new ErrorRepository();
const testRepo = new Map(errors);

test('Получение значения ошибки по ключу', () => {
  expect(expectRepo.translate(100)).toEqual(testRepo.get(100));
});

test('Ошибка при отсутствии ключа', () => {
  expect(() => {
    expectRepo.translate(200);
  }).toThrow('Unknown error');
});

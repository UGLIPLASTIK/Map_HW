import Team from '../team';

test('Добавление персонажа в команду', () => {
  const testTeam = new Team();
  const testChar = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'Undead',
  };
  const correct = new Set();
  correct.add(testChar);
  testTeam.add(testChar);
  expect(testTeam.members).toEqual(correct);
});

test('Ошибка при добавлении имеющегося в команде персонажа', () => {
  const testTeam = new Team();
  const testChar = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'Undead',
  };
  testTeam.add(testChar);
  expect(() => {
    testTeam.add(testChar);
  }).toThrow('Такой персонаж уже есть');
});

test('Добавление нескольких персонажей в команду', () => {
  const testTeam = new Team();
  const testChar1 = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'Undead',
  };
  const testChar2 = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Daemon',
    type: 'Daemon',
  };
  const correct = new Set();
  correct.add(testChar1);
  correct.add(testChar2);
  testTeam.addAll(testChar1, testChar2);
  expect(testTeam.members).toEqual(correct);
});

test('Конвертация Set в массив', () => {
  const testTeam = new Team();
  const testChar1 = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'Undead',
  };
  const testChar2 = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Daemon',
    type: 'Daemon',
  };
  testTeam.addAll(testChar1, testChar2);
  const correct = [testChar1, testChar2];
  expect(testTeam.toArray()).toEqual(correct);
});

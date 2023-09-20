/* eslint-disable no-restricted-syntax */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const char of characters) {
      this.members.add(char);
    }
  }

  toArray() {
    const teamArr = [];
    this.members.forEach((member) => teamArr.push(member));
    return teamArr;
  }
}

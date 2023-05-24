import Character from './character';
import { characterType } from './classes';

// eslint-disable-next-line no-unused-vars
export default class Swordsman extends Character {
  constructor(name) {
    super(name, characterType.Swordsman);
    this.attack = 40;
    this.defence = 10;
  }
}

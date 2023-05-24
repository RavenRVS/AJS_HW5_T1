import Character from './character';
import { characterType } from './classes';

// eslint-disable-next-line no-unused-vars
export default class Magician extends Character {
  constructor(name) {
    super(name, characterType.Magician);
    this.attack = 10;
    this.defence = 40;
  }
}

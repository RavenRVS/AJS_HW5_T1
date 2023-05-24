import Character from './character';
import { characterType } from './classes';

// eslint-disable-next-line no-unused-vars
export default class Bowman extends Character {
  constructor(name) {
    super(name, characterType.Bowman);
    this.attack = 25;
    this.defence = 25;
  }
}

import Character from './character';
import { characterType } from './classes';

// eslint-disable-next-line no-unused-vars
export default class Zombie extends Character {
  constructor(name) {
    super(name, characterType.Zombie);
    this.attack = 40;
    this.defence = 10;
  }
}

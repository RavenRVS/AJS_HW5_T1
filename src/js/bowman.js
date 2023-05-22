import Character from './character';
import { CLASSES } from './classes';

// eslint-disable-next-line no-unused-vars
export default class Bowerman extends Character {
  constructor(name) {
    super(name, CLASSES[0].className);
  }
}

import { CLASSES } from './classes';

const validTypes = CLASSES.map((i) => i.className);

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Имя должно иметь тип строка');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.setСlassСharacteristics(this.type);
  }

  setAttack(value) {
    this.attack = value;
  }

  setDefence(value) {
    this.defence = value;
  }

  setСlassСharacteristics(type) {
    CLASSES.forEach((i) => {
      if (i.className === type) {
        this.setAttack(i.attack);
        this.setDefence(i.defence);
      }
    });
  }
}

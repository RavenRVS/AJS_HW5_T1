import Character from '../character';
import { CLASSES } from '../classes';

test.each([
  ['create class', 'Player1', CLASSES[0].className, {
    name: 'Player1',
    type: CLASSES[0].className,
    health: 100,
    level: 1,
    attack: CLASSES[0].attack,
    defence: CLASSES[0].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Character(name, type);
    expect(result).toEqual(expected);
  },
);

test.each([
  ['error "name less than 2 letters"', 'P', CLASSES[0].className],
  ['error "name more than 10 letters"', 'SuperPlayer', CLASSES[0].className],
  ['error "name not string"', 777, CLASSES[0].className],
  ['error "envalid type"', 'Player1', 'anyType'],
])(
  ('should  get %s by name %s and type %s'),
  (option, name, type) => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars,
      const result = new Character(name, type);
    }).toThrow();
  },
);

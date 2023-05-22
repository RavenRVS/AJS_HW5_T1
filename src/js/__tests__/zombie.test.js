import { CLASSES } from '../classes';
import Zombie from '../zombie';

test.each([
  ['create class Zombie', 'Player1', {
    name: 'Player1',
    type: CLASSES[4].className,
    health: 100,
    level: 1,
    attack: CLASSES[4].attack,
    defence: CLASSES[4].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Zombie(name);
    expect(result).toEqual(expected);
  },
);

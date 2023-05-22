import { CLASSES } from '../classes';
import Bowman from '../bowman';

test.each([
  ['create class Bowman', 'Player1', {
    name: 'Player1',
    type: CLASSES[0].className,
    health: 100,
    level: 1,
    attack: CLASSES[0].attack,
    defence: CLASSES[0].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Bowman(name);
    expect(result).toEqual(expected);
  },
);

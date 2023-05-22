import { CLASSES } from '../classes';
import Magician from '../magician';

test.each([
  ['create class Magician', 'Player1', {
    name: 'Player1',
    type: CLASSES[2].className,
    health: 100,
    level: 1,
    attack: CLASSES[2].attack,
    defence: CLASSES[2].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Magician(name);
    expect(result).toEqual(expected);
  },
);

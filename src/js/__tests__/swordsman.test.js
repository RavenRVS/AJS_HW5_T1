import { CLASSES } from '../classes';
import Swordsman from '../swordsman';

test.each([
  ['create class Swordsman', 'Player1', {
    name: 'Player1',
    type: CLASSES[1].className,
    health: 100,
    level: 1,
    attack: CLASSES[1].attack,
    defence: CLASSES[1].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Swordsman(name);
    expect(result).toEqual(expected);
  },
);

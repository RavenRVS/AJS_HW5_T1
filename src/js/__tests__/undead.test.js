import { CLASSES } from '../classes';
import Undead from '../undead';

test.each([
  ['create class Undead', 'Player1', {
    name: 'Player1',
    type: CLASSES[3].className,
    health: 100,
    level: 1,
    attack: CLASSES[3].attack,
    defence: CLASSES[3].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Undead(name);
    expect(result).toEqual(expected);
  },
);

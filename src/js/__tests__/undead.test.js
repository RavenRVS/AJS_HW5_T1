import { characterType } from '../classes';
import Undead from '../undead';

test.each([
  ['create class Undead', 'Player1', 'Undead', {
    name: 'Player1',
    type: characterType.Undead,
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Undead(name, type);
    expect(result).toEqual(expected);
  },
);

import { characterType } from '../classes';
import Swordsman from '../swordsman';

test.each([
  ['create class Swordsman', 'Player1', 'Swordsman', {
    name: 'Player1',
    type: characterType.Swordsman,
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Swordsman(name, type);
    expect(result).toEqual(expected);
  },
);

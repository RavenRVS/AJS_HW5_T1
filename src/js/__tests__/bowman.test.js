import { characterType } from '../classes';
import Bowman from '../bowman';

test.each([
  ['create class Bowman', 'Player1', 'Bowman', {
    name: 'Player1',
    type: characterType.Bowman,
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Bowman(name, type);
    expect(result).toEqual(expected);
  },
);

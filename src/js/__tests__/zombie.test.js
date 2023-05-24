import { characterType } from '../classes';
import Zombie from '../zombie';

test.each([
  ['create class Zombie', 'Player1', 'Zombie', {
    name: 'Player1',
    type: characterType.Zombie,
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Zombie(name, type);
    expect(result).toEqual(expected);
  },
);

import { characterType } from '../classes';
import Magician from '../magician';

test.each([
  ['create class Magician', 'Player1', 'Magician', {
    name: 'Player1',
    type: characterType.Magician,
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Magician(name, type);
    expect(result).toEqual(expected);
  },
);

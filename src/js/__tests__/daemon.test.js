import { characterType } from '../classes';
import Daemon from '../daemon';

test.each([
  ['create class Daemon', 'Player1', 'Daemon', {
    name: 'Player1',
    type: characterType.Daemon,
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Daemon(name, type);
    expect(result).toEqual(expected);
  },
);

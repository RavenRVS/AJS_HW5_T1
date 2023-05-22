import { CLASSES } from '../classes';
import Daemon from '../daemon';

test.each([
  ['create class Daemon', 'Player1', {
    name: 'Player1',
    type: CLASSES[5].className,
    health: 100,
    level: 1,
    attack: CLASSES[5].attack,
    defence: CLASSES[5].defence,
  }],
])(
  ('should %s by name %s and type %s'),
  (option, name, expected) => {
    const result = new Daemon(name);
    expect(result).toEqual(expected);
  },
);

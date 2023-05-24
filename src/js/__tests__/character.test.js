import Character from '../character';

test.each([
  ['create class', 'Player1', 'Bowman', {
    name: 'Player1',
    type: 'Bowman',
    health: 100,
    level: 1,
  }],
])(
  ('should %s with name %s and type %s'),
  (option, name, type, expected) => {
    const result = new Character(name, type);
    expect(result).toEqual(expected);
  },
);

test.each([
  ['create class with error "name less than 2 letters"', 'P', 'Daemon'],
  ['create class with error "name more than 10 letters"', 'SuperPlayer', 'Daemon'],
  ['create class with error "name not string"', 777, 'Daemon'],
  ['create class with error "envalid type"', 'Player1', 'anyType'],
])(
  ('should %s by name %s and type %s'),
  (option, name, type) => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars,
      const result = new Character(name, type);
    }).toThrow();
  },
);

const { can_reach_end } = require('./index');

const testCases = [
  {
    input: [1, 2, 3],
    output: true,
  },
  {
    input: [5, 0, 0, 0],
    output: true,
  },
  {
    input: [0],
    output: true,
  },
  {
    input: [0, 2, 4],
    output: false,
  },
  {
    input: [1, 2, 0, 0, 1],
    output: false,
  },
  {
    input: [6, 7, 0, 0, 1],
    output: true,
  },
  {
    input: [10],
    output: true,
  },
  {
    input: [0, 0, 5],
    output: false,
  },
  {
    input: [1, 1, 1, 1, 1, 1, 0],
    output: true,
  },
  {
    input: [3, 0, 2, 0, 2, 0, 0],
    output: true,
  },
  {
    input: [6, 4, 0, 0, 0, 0, 3, 1, 2, 0],
    output: true,
  },
];

describe('can_reach_end()', () => {
  testCases.forEach(({input, output}) => {
    it(`${input} returns ${output}`, () => {
      expect(can_reach_end(input)).toEqual(output);
    });
  });
});

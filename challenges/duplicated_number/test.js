const { find_mistakes } = require('./index');

const testCases = [
  {
    input: [1, 1, 3, 4],
    output: 3, // dup: 1, miss: 2
  },
  {
    input: [2, 2],
    output: 3, // dup: 2, miss: 1
  },
  {
    input: [4, 3, 3, 1],
    output: 5, // dup: 3, miss: 2
  },
  {
    input: [6, 3, 2, 4, 3, 1],
    output: 8, // dup: 3, miss: 5
  },
  {
    input: [10, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    output: 11, // dup: 10, miss: 1
  },
  {
    input: [5, 4, 3, 2, 2],
    output: 3, // dup: 2, miss: 1
  },
  {
    input: [3, 1, 2, 3, 5],
    output: 7, // dup: 3, miss: 4
  },
  {
    input: [2, 1, 3, 3, 5],
    output: 7, // dup: 3, miss: 4
  },
  {
    input: [5, 4, 3, 2, 2],
    output: 3, // dup: 2, miss: 1
  },
];

describe('find_mistakes()', () => {
  testCases.forEach(({input, output}) => {
    it(`${input} returns ${output}`, () => {
      expect(find_mistakes(input)).toEqual(output);
    });
  });
});

const { get_palindromic_score_more_performant, get_palindromic_score_more_readable } = require('./index');

const testCases = [
  {
    input: 'abba',
    output: 0,
  },
  {
    input: 'racecar',
    output: 0,
  },
  {
    input: 'abcdcaa',
    output: 2,
  },
  {
    input: 'aaabbb',
    output: 6,
  },
  {
    input: 'abcdefgh',
    output: 8,
  },
  {
    input: 'a',
    output: 0,
  },
  {
    input: 'aa',
    output: 0,
  },
  {
    input: 'aaa',
    output: 0,
  },
  {
    input: 'abc',
    output: 2,
  },
  {
    input: 'abcd',
    output: 4,
  },
];

describe('get_palindromic_score_more_performant()', () => {
  testCases.forEach(({input, output}) => {
    it(`${input} returns ${output}`, () => {
      expect(get_palindromic_score_more_performant(input)).toEqual(output);
    });
  });
});

describe('get_palindromic_score_more_readable()', () => {
  testCases.forEach(({input, output}) => {
    it(`${input} returns ${output}`, () => {
      expect(get_palindromic_score_more_readable(input)).toEqual(output);
    });
  });
});

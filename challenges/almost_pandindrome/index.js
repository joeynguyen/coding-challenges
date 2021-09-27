/*
  The palindromic score of a string is the number of errors (characters which do not match) when the
  string is read forwards and backwards. For example, the palindromic score of 'fox' is 2, because
  'fox' and 'xof' differ by two characters. Write a function to take a string and return its
  palindromic score.
*/

function get_palindromic_score_more_performant(str) {
  // this function is more performant because it only iterates through
  // `str` once
  // but it is slightly less readable
  let errors = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      errors += 1;
    }
  }
  return errors;
}

function get_palindromic_score_more_readable(str) {
  // this function is less performant because it iterates through `str` twice
  // once, to reverse it
  // and again, to compare the original to the reversed
  // this function is more readable though so would be preferred if we knew the str
  // would never be too long
  const stringReversed = reverseString(str);
  let errors = 0;
  [...str].forEach((char, i) => {
    if (char !== stringReversed[i]) {
      errors += 1;
    }
  });
  return errors;
}

function reverseString(string) {
  const firstChar = string.charAt(0);
  const remainingChars = string.slice(1);

  if (string.length === 1) {
    return string;
  }
  return reverseString(remainingChars) + firstChar;
}

module.exports = {
  get_palindromic_score_more_performant,
  get_palindromic_score_more_readable,
}

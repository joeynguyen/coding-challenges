/*
  The input `nums` is supposed to be an array of unique integers ranging from 1 to `nums.length`
  (inclusive). However, there is a mistake: one of the numbers in the array is duplicated, which
  means another number is missing. Find the **sum** of the duplicated number and the missing number
  Example: in the array `[4, 3, 3, 1]`, 3 is present twice and 2 is missing, so 3 + 2 = 5.
  Therefore, `5` should be returned.
*/

function find_mistakes(nums = []) {
  const duplicate = findDuplicate(nums);
  const missing = findMissing(nums);

  return duplicate + missing;
}

function findDuplicate(nums) {
  let numsFound = [];

  // loop through the `nums` array. For each number in the array, add it to `numsFound`
  // If we find the same number again, we know it's the duplicate
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (numsFound.includes(currentNum)) {
      duplicate = currentNum;
      // stop looping through the array once we've found the duplicate
      break;
    } else {
      numsFound.push(currentNum);
    }

  }

  return duplicate;
}

function findMissing(nums) {
  /*
    From MDN:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    Generate a sequence of numbers
    Since the array is initialized with `undefined` on each position,
    the value of `v` below will be `undefined`
  */
  // generate an array of numbers from starting from one `1` to the length of the array
  const expectedNums = Array.from({length: nums.length}, (v, i) => i + 1);
  expectedNums.forEach((num, i) => {
    if (!nums.includes(i)) {
      missing = i;
    }
  });

  return missing;
}

module.exports = {
  find_mistakes,
}

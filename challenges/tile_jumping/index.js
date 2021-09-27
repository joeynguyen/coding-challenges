/*
    There are a number of tiles on the floor, each numbered with a different non-negative
    number. Treat this set of tiles as an array. You are ininitially standing on the first tile.
    Each tile in the set represents your max jumping distance at that position. (For example,
    if you are standing on 3, you can jump up to 3 tiles forward.) Find out if you can reach the
    last tile.
*/

function can_reach_end(nums) {
  let currentTileIndex = 0;
  let lastTileIndex = nums.length - 1;
  console.log('input:', nums);

  // If the number of tiles is 1, you're already on the last tile. return true
  if (nums.length === 1) return true;

  return canJumpToLast(currentTileIndex, lastTileIndex, nums, undefined, undefined);
}
function canJumpToLast(currentTileIndex, lastTileIndex, nums, originalTileVal, currentRecursionCount) {
  let currentTileVal = nums[currentTileIndex];

  // The current tile value is 0.  What we do next depends on whether or not this is the first time
  // `canJumpToLast()` is running or if it's already part of a recursion
  if (currentTileVal === 0) {
    // Check if we've started the recursion
    if (originalTileVal && currentRecursionCount !== undefined) {
      // While looping through possible tile jumps, once the number of times jumped matches the max
      // jumping value, check if if the current tile you're on is 0. If it is return false
      if (originalTileVal === currentRecursionCount) {
        // If the current tile's jump value is 0, you're no longer able to jump forward. Return false
        return false;
      }

      // If the current recursion count is less than the original tile value, continue to recurse
      return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, originalTileVal, currentRecursionCount + 1);
    }

    // This is the first unrecursed instance of `canJumpToLast()`
    // If the current tile's jump value is 0, you're no longer able to jump forward. Return false
    return false;
  }

  /*
    If the current tile's jump value is greater than or equal to
    the last tiles' index minus the current tile index, that means
    you're able to jump to the last tile. Return true
  */
  if (currentTileVal >= (lastTileIndex - currentTileIndex)) {
    return true;
  }

  if (originalTileVal && currentRecursionCount !== undefined) {
    if (originalTileVal === currentRecursionCount) {
      return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1);
    }

    // If the current tile's value is greater than 0, test if it can reach the end before
    // moving to the next tile
    if (currentTileVal > 0) {
      if (canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1)) {
        return true
      }
    }

    // originalTileVal > currentRecursionCount
    return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, originalTileVal, currentRecursionCount + 1);
  }

  // The current jump value is greater than 1. Attempt the jump for each possible tile you
  // can jump to, and run this function recursively
  return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1);
}

module.exports = {
  can_reach_end
}

/* test inputs scenarios */
// input: [3, 0, 2, 0, 2, 0, 0]
  // currentTileIndex: 0, currentTileVal: 3, originalTileVal: undefined, currentRecursionCount: undefined
    // currentTileIndex: 1, currentTileVal: 0, originalTileVal: 3, currentRecursionCount: 1
    // currentTileIndex: 2, currentTileVal: 2, originalTileVal: 3, currentRecursionCount: 2
      // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 1
      // currentTileIndex: 4, currentTileVal: 2, originalTileVal: 2, currentRecursionCount: 2
        // pass
    // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 3, currentRecursionCount: 3
      // fail
// pass

// input: [1, 2, 0, 0, 1]
  // currentTileIndex: 0, currentTileVal: 1, originalTileVal: undefined, currentRecursionCount: undefined
    // currentTileIndex: 1, currentTileVal: 2, originalTileVal: 1, currentRecursionCount: 1
      // currentTileIndex: 2, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 1
      // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 2
  // fail

// input: [6, 4, 0, 0, 0, 0, 3, 1, 2, 0]
  // currentTileIndex: 0, currentTileVal: 6, originalTileVal: undefined, currentRecursionCount: undefined
    // currentTileIndex: 1, currentTileVal: 4, originalTileVal: 6, currentRecursionCount: 1
      // currentTileIndex: 2, currentTileVal: 0, originalTileVal: 4, currentRecursionCount: 1
      // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 4, currentRecursionCount: 2
      // currentTileIndex: 4, currentTileVal: 0, originalTileVal: 4, currentRecursionCount: 3
      // currentTileIndex: 5, currentTileVal: 0, originalTileVal: 4, currentRecursionCount: 4
      // fail
    // currentTileIndex: 2, currentTileVal: 0, originalTileVal: 6, currentRecursionCount: 2
      // fails
    // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 6, currentRecursionCount: 3
      // fails
    // currentTileIndex: 4, currentTileVal: 0, originalTileVal: 6, currentRecursionCount: 4
      // fails
    // currentTileIndex: 5, currentTileVal: 0, originalTileVal: 6, currentRecursionCount: 5
      // fails
    // currentTileIndex: 6, currentTileVal: 3, originalTileVal: 6, currentRecursionCount: 6
// pass

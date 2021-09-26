/*
    There are a number of tiles on the floor, each numbered with a different non-negative
    number. Treat this set of tiles as an array. You are ininitially standing on the first tile.
    Each tile in the set represents your max jumping distance at that position. (For example,
    if you are standing on 3, you can jump up to 3 tiles forward.) Find out if you can reach the
    last tile.
*/

// Test Input	Expected Result	Result	Log
// [1,2,3]	    true
// [5,0,0,0]	true
// [0]	        true
// [0,2,4]	    false
// [1,2,0,0,1]	false
function can_reach_end(nums) {
  let canFinish = false;
  let canJump = true;
  // let lastTileIndex = nums.length - 1;
  let currentTileIndex = 0;
  console.log('input:', nums);

  // if the number of tiles is 1, you're already on the last tile. return true
  if (nums.length === 1) return true;

  // if the current tile position is the same as last tile position,
  // you're already on the last tile. return true
  // if (currentTileIndex === lastTileIndex) return true;

  let lastTileIndex = nums.length - 1;
  return canJumpToLast(currentTileIndex, lastTileIndex, nums, undefined, undefined);

  // check if current tile can jump forward to another tile
  // if so check for the jumping number of that next tile, repeat

  //
}
function canJumpToLast(currentTileIndex, lastTileIndex, nums, originalTileVal, currentRecursionCount) {
  let currentTileVal = nums[currentTileIndex];
  console.log('canJumpToLast', { currentRecursionCount, currentTileIndex, currentTileVal, originalTileVal, lastTileIndex })

  if (currentTileVal === 0) {
    if (originalTileVal && currentRecursionCount !== undefined) {
      // while looping through possible tile jumps, once the number of times jumped matches the max
      // jumping value, check if if the current tile you're on is 0. if it is return false
      if (originalTileVal === currentRecursionCount) {
        // if the current tile's jump value is 0, you're no longer able to jump forward. return false
        console.log('canJumpToLast originalTileVal === currentRecursionCount: current tile\'s jump value is 0. not able to jump forward')
        return false;
      } else {
        console.log({ currentRecursionCount, originalTileVal });
        return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, originalTileVal, currentRecursionCount + 1);
      }
    } else {
      // if the current tile's jump value is 0, you're no longer able to jump forward. return false
      console.log('current tile\'s jump value is 0. not able to jump forward')
      return false;
    }
  }

  /*
    if the current tile's jump value is greater than or equal to last tiles' index
    minus the current tile index, that means you're able to jump to the last tile.
    return true
  */
  if (currentTileVal >= (lastTileIndex - currentTileIndex)) {
    console.log('canJumpToLast: current tile\'s jump value is greater than or equal to last tiles\' index minus the current tile index');
    console.log({ currentTileVal, currentTileIndex, lastTileIndex, nums })
    return true;
  }

  // if the current jump value is greater than 1, attempt the jump for each possible tile you
  // can jump to, and run this function recursively
  if (originalTileVal && currentRecursionCount !== undefined) {
    if (originalTileVal === currentRecursionCount) {
      return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1);
    }

    // if the current tile's value is greater than 0, test if it can reach the end before
    // moving to the next tile
    if (currentTileVal > 0) {
      if (canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1)) {
        return true
      }
    }

    // originalTileVal > currentRecursionCount
    return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, originalTileVal, currentRecursionCount + 1);
  }

  return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1);
    // [3, 0, 2, 0, 2, 0, 0]
      // currentTileIndex: 0, currentTileVal: 3, originalTileVal: undefined, currentRecursionCount: undefined
        // currentTileIndex: 1, currentTileVal: 0, originalTileVal: 3, currentRecursionCount: 1
        // currentTileIndex: 2, currentTileVal: 2, originalTileVal: 3, currentRecursionCount: 2
          // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 1
          // currentTileIndex: 4, currentTileVal: 2, originalTileVal: 2, currentRecursionCount: 2
            // pass
        // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 3, currentRecursionCount: 3
          // fail
    // pass
    // [1, 2, 0, 0, 1]
      // currentTileIndex: 0, currentTileVal: 1, originalTileVal: undefined, currentRecursionCount: undefined
        // currentTileIndex: 1, currentTileVal: 2, originalTileVal: 1, currentRecursionCount: 1
          // currentTileIndex: 2, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 1
          // currentTileIndex: 3, currentTileVal: 0, originalTileVal: 2, currentRecursionCount: 2
      // fail
    // [6, 4, 0, 0, 0, 0, 3, 1, 2, 0]
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
}

module.exports = {
  can_reach_end
}

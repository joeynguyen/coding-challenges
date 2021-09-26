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
        if (originalTileVal === currentRecursionCount) {
          // if the current tile's jump value is 0, you're no longer able to jump forward. return false
          console.log('canJumpToLast: current tile\'s jump value is 0. not able to jump forward')
          return false;
        }
        console.log({currentRecursionCount, originalTileVal});
        if (originalTileVal > currentRecursionCount) {
          return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, originalTileVal, currentRecursionCount + 1);
        }
      // } else {
      //   // if the current tile's jump value is 0, you're no longer able to jump forward. return false
      //   console.log('current tile\'s jump value is 0. not able to jump forward')
      //   return false;
      }
    }
    // if (currentTileVal === 0) {
    //   return false;
    // }

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

  // if (currentTileVal > 0) {
  //   currentTileIndex++;
  //   canJumpToLast(currentTileIndex, lastTileIndex);
  // } else {
  // }
  // for (let i = 0; i < currentTileVal; i++) {
  //   console.log('canJumpToLast: for loop, i: ', i)
  //   if (canJumpToLast(currentTileIndex + i, lastTileIndex, nums) === true) {
  //     console.log('nums[currentTileIndex + i]', nums[currentTileIndex + i])
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums);
  return canJumpToLast(currentTileIndex + 1, lastTileIndex, nums, currentTileVal, 1);
  // return false;
}

module.exports = {
  can_reach_end
}

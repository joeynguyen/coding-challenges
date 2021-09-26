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
    let currentTile = 0;
    nums.forEach((num, i) => {
        // if the current tile's value is greater than length of tiles, canFinish = true

        // check if current tile can jump forward to another tile
        // if so check for the jumping number of that next tile, repeat

        //
    })
    return canFinish;

}

module.exports = {
  can_reach_end
}

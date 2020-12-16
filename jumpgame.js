/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Work from the end position towards the start. With each index to the left, see if that
num can reach the current index, that can eventually reach the end index
*/

var canJump = function (nums) {
  let validIndices = new Array(nums.length).fill(undefined)
  validIndices[validIndices.length - 1] = 'Good'
  let lastGoodIndex = validIndices.length - 1
  for (let i = validIndices.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndex) {
      lastGoodIndex = i
      validIndices[i] = 'Good'
    }
  }
  if (validIndices[0] === 'Good') return true
  else return false
};


/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.
TLE on leetcode, works on algoexpert
*/
var jump = function (nums) {
  let successArray = new Array(nums.length).fill(Infinity)
  successArray[0] = 0
  for (let i = 1; i < successArray.length; i++) {
    for (let k = i - 1; k >= 0; k--) {
      if (k + nums[k] >= i) successArray[i] = Math.min(successArray[i], successArray[k] + 1)
    }
  }
  return successArray[successArray.length - 1]
};

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
// [2,3,4,9,1,6,7]
// 19
*/
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 0) return 0
  let amounts = new Array(nums.length).fill(0)
  amounts[0] = nums[0]
  amounts[1] = nums[1]

  for (let i = 2; i < nums.length; i++) {
    let max = -Infinity
    for (let k = 0; k < i - 1; k++) {
      max = Math.max(max, amounts[k])
    }
    amounts[i] = max + nums[i]
  }
  let returnLargest = -Infinity
  for (let num of amounts) {
    returnLargest = Math.max(returnLargest, num)
  }
  return returnLargest
};

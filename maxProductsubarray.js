
// 152. Maximum Product Subarray

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 0) return 0

  let returnMax = nums[0]
  let prevMaxProduct = nums[0]
  let prevMinProduct = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let curMinProduct = Math.min(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i])
    let curMaxProduct = Math.max(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i])
    returnMax = Math.max(returnMax, curMaxProduct)
    prevMaxProduct = curMaxProduct
    prevMinProduct = curMinProduct
  }
  return returnMax
};

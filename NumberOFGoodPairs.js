// 1512. Number of Good Pairs
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


var numIdenticalPairs = function (nums) {
  let goodPairs = 0
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = { frequency: 1, combo: 0 }
    } else {
      hash[nums[i]].combo += hash[nums[i]].frequency
      hash[nums[i]].frequency += 1
    }
  }
  for (let num in hash) {
    goodPairs += hash[num].combo
  }
  return goodPairs
};

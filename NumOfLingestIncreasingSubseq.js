// 673. Number of Longest Increasing Subsequence

// Given an integer array nums, return the number of longest increasing subsequences.

// Notice that the sequence has to be strictly increasing.

// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

var findNumberOfLIS = function(nums) {
  let memo = new Array(nums.length).fill(1)//how long the sequence is at each index
  let count = new Array(nums.length).fill(1)// the number of longest subsequences there is
  for(let i = 1;i<nums.length;i++){
      for(let j = 0;j<i;j++){
          if(nums[j] < nums[i]){
              if(memo[j]+1 > memo[i]){
                  memo[i] = memo[j]+1
                  count[i] = count[j]//this means there's a longer subseuence in the array. count is taken from previous biggest count.
              }
              else if(memo[j]+1===memo[i]){//this means that there's a subsequence that is the same length as a previous subsequence. count is added on to current count
                  count[i]+=count[j]
              }
          }
      }
  }
  let longest = 0
  let returnCount = 0
  for(let i=0;i<memo.length;i++){
      if(memo[i] > longest){
          longest = memo[i]
      }
  }
  for(let i = 0;i<memo.length;i++){
      if(memo[i]===longest)returnCount+=count[i]
  }
  return returnCount
};

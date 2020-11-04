function kpmSearch(string, pattern) {
  let lpsArray = [0]
  let prefixInd = 0
  let suffixInd = 1
  while (suffixInd < pattern.length) {
    if (pattern[prefixInd] === pattern[suffixInd]) {
      lpsArray.push(prefixInd + 1)
      prefixInd += 1
      suffixInd += 1
    }
    else {
      if (prefixInd === 0) {
        lpsArray.push(prefixInd)
        suffixInd += 1
      }
      else {
        prefixInd = lpsArray[prefixInd - 1]
      }
    }
  }
  console.log(lpsArray)
  let stringInd = 0
  let patternInd = 0
  while (stringInd < string.length) {
    if (string[stringInd] === pattern[patternInd]) {
      if (patternInd === pattern.length - 1) {
        return stringInd - pattern.length + 1
      }
      stringInd += 1
      patternInd += 1
    }
    else {
      if (patternInd > 0) {
        patternInd = lpsArray[patternInd - 1];
      }
      else {
        stringInd += 1
        patternInd = 0
      }
    }
  }
  return -1
}


// 746. Min Cost Climbing Stairs
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

var minCostClimbingStairs = function (cost) {
  if (cost.length === 2) return Math.min(cost[0], cost[1])
  //array represents final and lowest cost to climb all stairs assuming that particular element in cost is the last one
  const dp = [cost[0], Math.min(cost[1], cost[1] + cost[0])]
  for (let i = 2; i < cost.length; i++) {
    dp.push(cost[i] + Math.min(dp[i - 2], dp[i - 1]))
  }
  // then you return the lowest of the last two numbers in the array, since you can take either one or two steps
  return Math.min(dp[dp.length - 1], dp[dp.length - 2])
};

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

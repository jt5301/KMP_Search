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

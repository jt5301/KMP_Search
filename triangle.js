// Given a triangle array, return the minimum path sum from top to bottom.
// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
// Example 1:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

//dp
var minimumTotal = function (triangle) {
  let dpTriangle = []
  for (let i = 1; i < triangle.length + 1; i++) {
    dpTriangle.push(new Array(i).fill(0))
  }
  dpTriangle[dpTriangle.length - 1] = triangle[triangle.length - 1]
  for (let i = dpTriangle.length - 2; i >= 0; i--) {
    for (let k = 0; k < dpTriangle[i].length; k++) {
      dpTriangle[i][k] = Math.min(
        triangle[i][k] + dpTriangle[i + 1][k],
        triangle[i][k] + dpTriangle[i + 1][k + 1]
      )
    }
  }
  return dpTriangle[0][0]
}

// brute force, where every possibility is tried. Times out on lc.
var minimumTotal = function (triangle) {
  let currentMin = Infinity

  function pathfinder(remainingPath, runningSum, index) {
    if (remainingPath.length === 0) {
      currentMin = Math.min(currentMin, runningSum)
      return
    }
    if (remainingPath[0][index] || remainingPath[0][index] == 0) {
      runningSum += remainingPath[0][index]
      pathfinder(remainingPath.slice(1), runningSum, index)
      runningSum -= remainingPath[0][index]
    }
    if (remainingPath[0][index + 1] || remainingPath[0][index + 1] == 0) {
      runningSum += remainingPath[0][index + 1]
      pathfinder(remainingPath.slice(1), runningSum, index + 1)
      runningSum -= remainingPath[0][index + 1]
    }
  }
  pathfinder(triangle, 0, 0)
  return currentMin
}

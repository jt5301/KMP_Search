
// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

var merge = function (intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  const mergedIntervals = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i]
    let latestIntervalInReturn = mergedIntervals[mergedIntervals.length - 1]
    if (currentInterval[0] >= latestIntervalInReturn[0] && currentInterval[0] <= latestIntervalInReturn[1]) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(currentInterval[1], mergedIntervals[mergedIntervals.length - 1][1])
    }
    else mergedIntervals.push(currentInterval)
  }
  return mergedIntervals
};

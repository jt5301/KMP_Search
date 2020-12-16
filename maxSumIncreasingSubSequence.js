

/*MAx Sum Increasing Subsequence from algoexpert:
  write a function that takes in a non-empty array of integers & returns the greatest sum that can be generated
  from a strictly-increasing subsequence, as well as an array of the numbers in that subsequence

  input:maxSumIncreasingSubsequence([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  output:[45,[1,2,3,4,5,6,7,8,9]]
*/

function maxSumIncreasingSubsequence(array) {
  let totals = [array[0]]
  let lastIndexTracker = [0]
  let maxSum = array[0]
  for (let i = 1; i < array.length; i++) {
    let highestTotal = array[i]
    let lastIndex = i
    for (let k = i - 1; k >= 0; k--) {
      if (array[i] > array[k] && array[i] + totals[k] > highestTotal) {
        highestTotal = array[i] + totals[k]
        lastIndex = k
      }
    }
    maxSum = Math.max(maxSum, highestTotal)
    totals.push(highestTotal)
    lastIndexTracker.push(lastIndex)
  }
  let indexOfMaxSum = totals.indexOf(maxSum)
  let path = []
  while (true) {
    path.push(array[indexOfMaxSum])
    if (indexOfMaxSum === lastIndexTracker[indexOfMaxSum]) break
    indexOfMaxSum = lastIndexTracker[indexOfMaxSum]
  }
  path.reverse()
  let returnSum = path.reduce((accum, current) => {
    return accum += current
  }, 0)
  return [returnSum, path]
}

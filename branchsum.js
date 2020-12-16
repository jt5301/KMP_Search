/*branchsums: write a functio to add list of branch sums ordered from left to right. branch sum = sum of all values in binary tree branch / path of nodes root to leaf */
function branchSums(root) {
  const sums = []
  branchSumsHelper(root, sums)
  return sums
}

function branchSumsHelper(root, sumArray, runningSum = 0) {
  runningSum += root.value
  if (root.left) {
    branchSumsHelper(root.left, sumArray, runningSum)
  }
  if (root.right) {
    branchSumsHelper(root.right, sumArray, runningSum)
  }
  if (!root.left && !root.right) {
    sumArray.push(runningSum)
  }
}

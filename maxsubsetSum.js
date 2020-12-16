// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.
// Sample Input
// 5
// 3 5 -7 8 10

// Sample Output
// 15
function maxSubsetSum(arr) {
  if(arr.length===1)return arr[0]
  if(arr.length===2)return Math.max(arr[0],arr[1])
  let dpArr = [arr[0],Math.max(arr[0],arr[1])]
  let currentMax = Math.max(arr[0],arr[1])
  for(let i = 2;i<arr.length;i++){
      let maxHere = Math.max((dpArr[i-2]+arr[i]),dpArr[i-1], dpArr[i-2], arr[i],currentMax)
      currentMax = maxHere
      dpArr.push(maxHere)
  }
  return dpArr[dpArr.length-1]
}

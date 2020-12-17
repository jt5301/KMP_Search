
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true

var searchMatrix = function(matrix, target) {
  if(matrix.length===0)return false
  let left = 0
  let right = matrix.length-1
  let middle = Math.floor((left+right)/2)
  while(left <=right && matrix.length>1){
      let midArray = matrix[middle]
      if(target >=midArray[0] && target <=midArray[midArray.length-1])break
      let leftOfMid = matrix[middle-1] || midArray
      let rightOfMid = matrix[middle+1] || midArray
      if(target > leftOfMid[leftOfMid.length-1] && target < rightOfMid[0]){
          break
      }
      if(target <=leftOfMid[leftOfMid.length-1]){
          right = middle-1
          middle = Math.floor((left+right)/2)
          continue
      }
      if(target >= rightOfMid[0]){
          left=middle+1
          middle = Math.floor((left+right)/2)
          continue
      }
  }
  if(middle<0)middle=0
  if(middle===matrix.length)middle = matrix.length-1
  let targetArr = matrix[middle]
  left = 0
  right = targetArr.length-1
  while(left <= right){
      middle = Math.floor((left+right)/2)
      if(targetArr[middle] === target)return true
      if(targetArr[middle] > target){
          right = middle-1
          continue
      }
      if(targetArr[middle] < target){
          left = middle+1
          continue
      }
  }
  return false
};

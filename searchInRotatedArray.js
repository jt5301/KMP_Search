// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

var search = function (nums, target) {
  if (nums.length === 1) {
    if (target != nums[0]) return -1
    else return 0
  }
  let left = 0
  let right = nums.length - 1
  let pivot
  while (true) {
    let middle = Math.floor((left + right) / 2)
    if (nums[left + 1] <= nums[left]) {
      pivot = left + 1
      break
    }
    if (middle === left) {
      pivot = left
      break
    }
    if (nums[right] < nums[middle]) left = middle
    else right = middle
  }
  left = 0
  right = nums.length - 1
  while (nums[pivot] != target) {
    if (target >= nums[pivot] && target <= nums[right]) left = pivot
    else right = pivot - 1
    pivot = Math.floor((left + right) / 2)
    if (nums[left] === target) return left
    if (nums[right] === target) return right
    if (left === pivot || right === pivot) return -1
  }
  return pivot
}

var search = function(nums, target) {
  //if length ===1
  if(nums.length===1){
      if(nums[0] != target)return -1
      else return 0
  }
  let left = 0
  let right = nums.length-1
  let middle = Math.floor((left+right)/2)
      //loop to find pivot
  while(true){
      //checkers for pivot
      if(nums[middle-1] > nums[middle]){
          break
      }
      if(nums[middle+1] < nums[middle]){
          middle+=1
          break
      }
      //binary search
      if(nums[left] > nums[middle]){
          right = middle
          middle = Math.floor((left+right)/2)
          continue
      }
      if(nums[middle] > nums[right]){
          left = middle
          middle = Math.floor((left+right)/2)
          continue
      }
      else break
  }
  //reset left & right & find where target is given the split between the pivot
  left = 0
  right = nums.length-1
  //covers case where middle was already the pivot
  if(nums[left] > nums[middle] || nums[middle] > nums[right])
      if(target >= nums[left] && target <= nums[middle-1]){
          right = middle-1
          middle = Math.floor((left+right)/2)
      }
      else{
          left = middle
          middle = Math.floor((left+right)/2)
      }
  //binary search
  while(true){
      if(nums[middle]===target)return middle
      if(nums[left]===target)return left
      if(nums[right]===target)return right

      if(target > nums[middle]){
          left = middle
          middle = Math.floor((left+right)/2)
      }
      else{
          right = middle
          middle = Math.floor((left+right)/2)
      }
      if(right===middle || left === middle)return -1
  }
};

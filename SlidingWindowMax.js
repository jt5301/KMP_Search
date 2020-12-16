// 239. Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


var maxSlidingWindow = function(nums, k) {
  let head = new Node(nums[0])
  let reset = head
  let maxArray = []
  for(let i = 1;i<k;i++){
      head.next = new Node(nums[i])
      head = head.next
  }
  let largestVal = findLargest(reset)
  maxArray.push(largestVal)
  while(k < nums.length){
      head.next = new Node(nums[k])
      head = head.next
      if(nums[k] >largestVal){
          largestVal = nums[k]
      }
      else{
          if(reset.val === largestVal){
              let nextLargest = findLargest(reset.next)
              largestVal = nextLargest
          }
      }
      reset = reset.next
      maxArray.push(largestVal)
      k+=1
  }
  return maxArray
};

function findLargest(node){
  let largest = -Infinity
  while(node){
      largest = Math.max(largest, node.val)
      node = node.next
  }
  return largest
}

class Node{
  constructor(val){
      this.val = val
      this.next = null
  }
}

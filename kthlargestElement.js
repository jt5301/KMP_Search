// 215. Kth Largest Element in an Array
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4


//Using MergeSort
var findKthLargest = function(nums, k) {
  nums = mergeSort(nums)
  return nums[nums.length-k]
};

const mergeSort = (array) =>{
  if(array.length===1) return array
  let left = array.slice(0,array.length/2)
  let right = array.slice(array.length/2)
  return mergeSortHelper(mergeSort(left),mergeSort(right))
}
const mergeSortHelper = (array1,array2) =>{
  let arr1P = 0
  let arr2P = 0
  let sorted = []
  while(arr1P < array1.length && arr2P < array2.length){
      if(array1[arr1P] <=array2[arr2P]){
          sorted.push(array1[arr1P])
          arr1P+=1
      }
      else{
          sorted.push(array2[arr2P])
          arr2P+=1
      }
  }
  if(arr1P<array1.length){
      for(let i = arr1P;i<array1.length;i++){
          sorted.push(array1[i])
      }
  }
  if(arr2P<array2.length){
      for(let i = arr2P;i<array2.length;i++){
          sorted.push(array2[i])
      }
  }
  return sorted
}

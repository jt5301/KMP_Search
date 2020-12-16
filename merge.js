//<Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p3 = nums1.length - 1
  while (p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p3] = nums1[p1]
      p1 -= 1
    }
    else {
      nums1[p3] = nums2[p2]
      p2 -= 1
    }
    p3 -= 1
  }
}

var merge = function (nums1, m, nums2, n) {
  let pointer1 = 0
  let pointer2 = nums1.length
  let pointer3 = m
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  for (let i = pointer2; i < nums1.length; i++) {
    if (nums1[i] <= nums1[pointer1]) {
      nums1[pointer3] = nums1[pointer1]
      nums1[pointer1] = nums1[i]
      nums1[i] = 0
      pointer3 += 1
    }
    pointer1 += 1
  }
  while (pointer3 < m + n) {
    nums1[pointer3] = nums1[pointer3 + n]
    nums1[pointer3 + n] = 0
    pointer3 += 1
  }
  console.log(nums1)
};

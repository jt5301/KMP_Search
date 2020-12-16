/*Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.
  For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
  containsCloseNums(nums, k) = true.

  There are two 2s in nums, and the absolute difference between their positions is exactly 3. */
  function containsCloseNums(nums, k) {
    let duplicates = {}

    for (let i = 0; i < nums.length; i++) {
      if (!duplicates[nums[i]]) {
        duplicates[nums[i]] = [i]
      }
      else {
        let prevSighting = duplicates[nums[i]][duplicates[nums[i]].length - 1]
        if (i - prevSighting <= k) return true
        else duplicates[nums[i]].push(i)
      }
    }
    return false
  }

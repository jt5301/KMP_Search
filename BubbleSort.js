function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    let swapCheck = true
    for (let k = 0; k < i - 1; k++) {
      if (array[k] > array[k + 1]) {
        let temp = array[k + 1]
        array[k + 1] = array[k]
        array[k] = temp
        swapCheck = false
      }
    }
    if (swapCheck) return array
  }
  return array
}

// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.



// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

var numDecodings = function (s) {
  if (s[0] === '0') return 0;
  if (s.length === 1) return 1
  let dp = [1]
  if (s[1] === '0') {
    if (s[0] === '1' || s[0] === '2') dp[1] = 1
    else return 0
  }
  else {
    if ((s[0] === '1' || s[0] === '2') && parseInt(s[0] + s[1]) <= 26) dp[1] = 2
    else dp[1] = 1
  }
  if (s.length === 2) return dp[1]
  for (let i = 2; i < s.length; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp.push(dp[dp.length - 2])
      }
      else return 0
    }
    else {
      let num = parseInt(s[i - 1] + s[i])
      if (num <= 26 && num > 10) {
        dp.push(dp[i - 2] + dp[i - 1])
      }
      else dp.push(dp[i - 1])
    }
  }
  return dp[dp.length - 1]
};

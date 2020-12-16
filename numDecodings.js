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
  //build up dp array. first check 1 and 2 chars in string. '0' on its own is not valid
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
  //since '0' by itself is not valid, check if it can be part of prev char code.
  for (let i = 2; i < s.length; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp.push(dp[dp.length - 2])
      }
      else return 0
    }
    else {
      //if num is between 10 and 26, it can be decode in two ways. ex "15" and "1,5"
      let num = parseInt(s[i - 1] + s[i])
      if (num <= 26 && num > 10) {
        dp.push(dp[i - 2] + dp[i - 1])
      }
      else dp.push(dp[i - 1])
    }
  }
  //after array is built up, return last number that represents last possibilities
  return dp[dp.length - 1]
};

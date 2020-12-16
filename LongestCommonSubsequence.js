// 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.
// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
// If there is no common subsequence, return 0.

// Example 1:
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

var longestCommonSubsequence = function(text1, text2) {
  let longerStr = text1.length > text2.length ? text1:text2
  let shorterStr = text1 === longerStr ? text2:text1
  let memo = createMemo(longerStr.length,shorterStr.length)
  for(let i = 0;i<shorterStr.length;i++){
      for(let k = 0;k<longerStr.length;k++){
          let top = memo[i-1] ? memo[i-1][k]:0
          let left = memo[i][k-1] ? memo[i][k-1]:0
          if(longerStr[k]===shorterStr[i]){
              let topLeft
              if(memo[i-1]){
                  if(memo[i-1][k-1])topLeft = memo[i-1][k-1]
                  else topLeft = 0
              }//this part is so dumb. Need to refactor.
              else topLeft = 0
              memo[i][k] = topLeft+=1
          }
          else memo[i][k]=Math.max(top,left)
      }
  }
  return memo[shorterStr.length-1][longerStr.length-1]
};

function createMemo(w,h){
  let memo = []
  for(let i = 0;i<h;i++){
      let newRow = new Array(w).fill(0)
      memo.push(newRow)
  }
  return memo
}

// 516. Longest Palindromic Subsequence
// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input:

// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".
// "agbdba"
// Output:
// 5
// abdba
var longestPalindromeSubseq = function(s) {
  let memo = createMemo(s)
  let counter = 1
  for(let i = 0 ;i<memo.length;i++){
      memo[i][i] = 1
  }
  while(counter < s.length){
      let firstLetter = 0
      debugger
      while(firstLetter+counter < s.length){
              let bottomLongestPalin = firstLetter!=s.length ? memo[firstLetter+1][firstLetter+counter] : 1
              let leftLongestPalin = firstLetter+counter!=0 ? memo[firstLetter][firstLetter+counter-1]:1
              let maxPalinSoFar = Math.max(bottomLongestPalin,leftLongestPalin)
          if(s[firstLetter]===s[firstLetter+counter]){
              memo[firstLetter][firstLetter+counter]= memo[firstLetter+1][firstLetter+counter-1]+2
          }
          else{
              memo[firstLetter][firstLetter+counter]= maxPalinSoFar
          }
          firstLetter+=1
      }
      counter+=1
  }
  return memo[0][s.length-1]
};
function createMemo(string){
  let memo = []
  for(let i=0;i<string.length;i++){
      memo.push(new Array(string.length).fill(0))
  }
  return memo
}

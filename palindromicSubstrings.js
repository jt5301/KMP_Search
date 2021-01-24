// 647. Palindromic Substrings
// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

var countSubstrings = function(s) {
  let row = new Array(s.length).fill(0)
  let dp = row.map(()=>{
      return new Array(s.length).fill(0)
  })
  for(let i = 0;i<s.length;i++){
      dp[i][i] = 1
  }
  for(let i = 1;i<s.length;i++){
      if(s[i]===s[i-1]){
      dp[i-1][i] = 1
      }
  }
  for(let i = 1;i<s.length;i++){
      for(let k = 0;k < i;k++){
          if(s[i]===s[k] && dp[k+1][i-1]===1)
          dp[k][i]=1

      }
  }
  let count = 0
  for(let i = 0;i<s.length;i++){
      for(let k = 0;k<s.length;k++){
          if(dp[i][k])count+=1
      }
  }
  return count
};

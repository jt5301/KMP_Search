// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.


var lengthOfLongestSubstringKDistinct = function(s, k) {
  if(k===0)return 0
  let hash = {}
  let longest = 0
  let tempLongest = 0
  let right = 0
  let left = 0
  while(right <s.length){
      if(Object.keys(hash).length<=k){
          if(!hash[s[right]]){
          hash[s[right]]=1
          }
          else hash[s[right]]+=1
          if(Object.keys(hash).length<=k){
              right+=1
              tempLongest+=1
          }
      }
      else{
          longest = Math.max(longest,tempLongest)
          delete hash[s[right]]
          longest = Math.max(longest,tempLongest)
          hash[s[left]]-=1
          if(hash[s[left]]===0){
              delete hash[s[left]]
          }
          left+=1
          tempLongest-=1
      }
  }
  return Math.max(longest,tempLongest)
};

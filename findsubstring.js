

//Find if a substring is a valid substring of string, regardless of order

function findSubString(string, substring) {
  let letterHash = {}
  let ssLength = substring.length
  for (let letter of substring) {
    if (!letterHash[letter]) letterHash[letter] = 1
    else letterHash[letter] += 1
  }
  for (let i = 0; i < string.length; i++) {
    if (letterHash[string[i]]) {
      let slice = string.slice(i, i + ssLength)
      let copy = { ...letterHash }
      let possibleReturn = helper(slice, copy)
      if (possibleReturn) return true
    }
  }
  return false
}

function helper(string, letterHash) {
  //first check for stray letters
  for (let letter of string) {
    if (!letterHash[letter]) return false
  }
  for (let letter of string) {
    letterHash[letter] -= 1
  }
  let check = 0
  for (let letter in letterHash) {
    check += letterHash[letter]
  }
  if (check === 0) return true
  else return false
}

console.log(findSubString('bloomberg', 'moo'))

//same q in Leetcode
// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.



// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False




var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  let s1Hash = {}
  for (let letter of s1) {
    if (!s1Hash[letter]) s1Hash[letter] = 1
    else s1Hash[letter] += 1
  }
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    let s2Substring = s2.slice(i, i + s1.length)
    if (compare(s1Hash, s2Substring)) return true
  }
  return false
};

function compare(hash, substring) {
  let hash2 = {}
  for (let letter of substring) {
    if (!hash2[letter]) hash2[letter] = 1
    else hash2[letter] += 1
  }
  for (let letter in hash2) {
    if (hash2[letter] === hash[letter]) continue
    else return false
  }
  return true
}



// Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false
  let hash = {}
  let hash2 = {}
  let array1 = []
  let array2 = []
  let counter1 = 1
  let counter2 = 1
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = counter1
      array1.push(hash[s[i]])
      counter1 += 1
    }
    else array1.push(hash[s[i]])
    if (!hash2[t[i]]) {
      hash2[t[i]] = counter2
      array2.push(hash2[t[i]])
      counter2 += 1
    }
    else array2.push(hash2[t[i]])
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) return false
  }
  return true
};

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function (ransomNote, magazine) {
  let magHash = {}
  for (let i in magazine) {
    if (!magHash[magazine[i]]) magHash[magazine[i]] = 1
    else magHash[magazine[i]] += 1
  }
  for (let i in ransomNote) {
    if (magHash[ransomNote[i]] === 0 || !magHash[ransomNote[i]]) return false
    magHash[ransomNote[i]] -= 1
  }
  return true

};

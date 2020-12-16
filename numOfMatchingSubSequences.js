
//Number of Matching Subsequences

// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input:
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
var numMatchingSubseq = function (S, words) {
  let matches = 0
  for (let word of words) {
    if (wordCheck(S, word)) matches += 1
  }
  return matches
};

function wordCheck(string, word) {
  let stringPointer = 0
  let wordPointer = 0
  while (stringPointer < string.length) {
    if (word[wordPointer] === string[stringPointer]) wordPointer += 1
    if (wordPointer === word.length) return true
    stringPointer += 1
  }
  return false
}

// Given two strings, one is a subsequence if all of the elements of the
// first string occur in the same order within the second string. They do
// not have to be contiguous in the second string, but order must be
// maintained. For example, given the string 'I like cheese', the words ('I',
// 'cheese') are one possible subsequence of that string. Words are space
// delimited.
// Given two strings, s and t, where t is a subsequence of s, report the
// words of s, missing in t (case sensitive), in the order they are missing.
// Example
// s = 'I like cheese'
// t = 'like'
// Then 'like' is the subsequence, and ['I', 'cheese'] is the list of missing
// words, in order.
// Function Description
// Complete the function missingWords in the editor below.
// missingWords has the following parameter(s):
// string s: a sentence of space-separated words
// string t: a sentence of space-separated words
// Returns:
// string[i]: an array of strings that contains all words in s that are
// missing from t, in the order they occur within s

function missingWords(string1, string2) {
  let str1Arr = string1.split(' ') //full sentence
  let str2Arr = string2.split(' ') //subsequence
  let allMissingWords = []
  let counter = 0
  str1A.forEach((current) => {
    if (current === str2Arr[counter]) counter++
    else allMissingWords.push(current)
  })
  return allMissingWords
}

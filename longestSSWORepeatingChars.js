

// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//Brute force (TLE)

const lengthOfLongestSubstring = (str) => {
  if (str.length === 0) return 0
  let returnLongest = ' '
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      let subString = str.slice(i, k + 1)
      let subStringTrueFalse = checkUnique(subString)
      if (subStringTrueFalse && subString.length > returnLongest.length) returnLongest = subString
    }
  }
  return returnLongest.length
}

function checkUnique(string) {
  let tracker = {}
  for (let letter of string) {
    if (!tracker[letter]) {
      tracker[letter] = true
    }
    else return false
  }
  return true
}

//More optimized

const lengthOfLongestSubstring = (str) => {
  let tracker = {}
  let tempLongest = ''
  let returnLongest = ''
  for (let i = 0; i < str.length; i++) {
    if (!tracker[str[i]] && tracker[str[i]] != 0) {
      tracker[str[i]] = i
      tempLongest += str[i]
    }
    else {
      if (tempLongest.length > returnLongest.length) {
        returnLongest = tempLongest
      }
      tempLongest = ''
      i = tracker[str[i]]
      tracker = {}
    }
  }
  if (tempLongest.length > returnLongest.length) return tempLongest.length
  return returnLongest.length
}



// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be isBeautifulString(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.
function isBeautifulString(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letterHash = {}

  for (let letter of inputString) {
    if (!letterHash[letter]) letterHash[letter] = 1
    else letterHash[letter] += 1
  }
  let lastLetter = 'a'
  for (let i = 1; i < alphabet.length; i++) {
    if (letterHash[alphabet[i]]) lastLetter = alphabet[i]
  }
  let lastLetterIndex = alphabet.indexOf(lastLetter)
  for (let i = 1; i <= lastLetterIndex; i++) {
    if (letterHash[alphabet[i]] > letterHash[alphabet[i - 1]] || !letterHash[alphabet[i - 1]]) return false
  }
  return true
}

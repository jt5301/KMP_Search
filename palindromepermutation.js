// Write an efficient method that checks whether any permutation ↴ of an input string is a palindrome. ↴
function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  if (theString.length === 0) return true
  let dict = {}
  for (let letter of theString) {
    if (!dict[letter]) dict[letter] = 1
    else delete dict[letter]
  }
  let remainingDict = Object.keys(dict).length
  if (theString.length % 2 === 0) {
    if (remainingDict != 0) return false
    return true
  }
  else {
    if (remainingDict != 1) return false
    return true
  }
}

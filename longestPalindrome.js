//Given a string s, return the longest palindromic substring in s.
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
var longestPalindrome = function (s) {
  let longestPalin = ''
  for (let i = 0; i < s.length; i++) {
    let palin1 = palindromeChecker(s, i, i)
    let palin2 = palindromeChecker(s, i, i + 1)
    let possibleLongest = palin1.length >= palin2.length ? palin1 : palin2
    longestPalin = longestPalin.length >= possibleLongest.length ? longestPalin : possibleLongest
  }
  return longestPalin
};
function palindromeChecker(string, left, right) {
  if (string[left] != string[right]) return string[left]
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left -= 1
    right += 1
  }
  return string.slice(left + 1, right)
}

var longestPalindrome = function(s) {
  let longest = ''
  for(let i = 0;i<s.length;i++){
      let check1 = palindromeCheck(i,i,s)
      let check2 = palindromeCheck(i,i+1,s)
      let tempLongest = check1.length > check2.length ? check1:check2
      longest = longest.length > tempLongest.length ? longest:tempLongest
  }
  return longest
};

function palindromeCheck(start,end,string){
  while(start >=0 && end <string.length){
      if(string[start]===string[end]){
          start-=1
          end+=1
      }
      else break
  }
  return string.slice(start+1,end)
}

// 451. Sort Characters By Frequency

// Given a string, sort it in decreasing order based on the frequency of characters.

var frequencySort = function (s) {
  const freq = {}
  for (let letter of s) {
    if (!freq[letter]) freq[letter] = 1
    else freq[letter] += 1
  }
  let letters = Object.keys(freq)
  letters.sort((a, b) => {
    return freq[b] - freq[a]
  })
  let returnString = ''
  for (let i = 0; i < letters.length; i++) {
    let curLetter = letters[i]
    for (let k = 0; k < freq[curLetter]; k++) {
      returnString += curLetter
    }
  }
  return returnString
};

// If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.

function removeTilFifty(string) {
  //assuming largest unique set of characters = the most number of characters that I can take out of the string without the string dipping less than 50
  if (string.length < 50) return 'please pass in a string with 50 or more characters'
  if (!string.length) return 'please pass in a string'

  let hashMap = {}
  let stringLength = 0
  for (i in string) {
    if (string[i] === ' ') continue //assuming whitespace (' ') is not a character. If it is then I can take out this line
    if (hashMap[string[i]]) hashMap[string[i]] += 1
    else hashMap[string[i]] = 1
    stringLength += 1
  }
  let hashKeys = Object.keys(hashMap)
  let sortedArr = []
  hashKeys.sort((a, b) => {
    return hashMap[a] - hashMap[b]
  })
  let outputArr = []
  for (let key in hashKeys) {
    let currentKey = hashKeys[key]
    let currentCount = hashMap[hashKeys[key]]
    if (stringLength - currentCount > 50) {
      stringLength -= currentCount
      outputArr.push(currentKey)
    }
  }

  return outputArr

}

removeTilFifty('If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.')

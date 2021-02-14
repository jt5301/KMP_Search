var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  const sHash = {}
  for (let letter of s) {
    if (!sHash[letter]) sHash[letter] = 1
    else sHash[letter] += 1
  }
  console.log(sHash)
  for (let letter of t) {
    if (sHash[letter]) sHash[letter] -= 1
  }
  for (let letter in sHash) {
    if (sHash[letter]) return false
  }
  return true
}

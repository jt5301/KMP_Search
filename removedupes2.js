// Remove All Adjacent Duplicates in String II
var removeDuplicates = function (s, k) {
  let hashCheck = {}
  for (let i = 0; i < s.length; i++) {
    if (hashCheck[s[i]]) {
      hashCheck[s[i]] += 1
      if (hashCheck[s[i]] === k) {
        s = s.slice(0, i - k + 1) + s.slice(i + 1)
        i = -1
        hashCheck = {}
      }
    } else {
      hashCheck = {}
      hashCheck[s[i]] = 1
    }
  }
  return s
}

//Not optimized, O(n)^2
var removeDuplicates = function (s, k) {
  let noDupes = false
  let i = 0
  while (i < s.length - k + 1) {
    let test = s.slice(i, i + k)
    if (isDupe(test)) {
      s = s.slice(0, i) + s.slice(i + k)
      i = 0
    } else i++
  }
  return s
}

function isDupe(string) {
  let match = string[0]
  for (let i = 1; i < string.length; i++) {
    if (string[i] != match) return false
  }
  return true
}

// Remove All Adjacent Duplicates in String II
var removeDuplicates = function (s, k) {
  let hashCheck = {}
  for (let i = 0; i < s.length; i++) {
    if (hashCheck[s[i]]) {
      hashCheck[s[i]] += 1
      if (hashCheck[s[i]] === k) {
        s = s.slice(0, (i - k) + 1) + s.slice(i + 1)
        i = -1
        hashCheck = {}
      }
    }
    else {
      hashCheck = {}
      hashCheck[s[i]] = 1
    }
  }
  return s
};

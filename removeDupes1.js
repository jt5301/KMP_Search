// Remove All Adjacent Duplicates in String I
var removeDuplicates = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2)
      i = -1
    }
  }
  return s
};

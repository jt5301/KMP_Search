// Given 2 strings of random length, determine what the single "extra" character is.
// All ASCII characters allowed, case-sensitive.
// StrA can be > or < or = to StrB length

// */

function findExtra(strA, strB) {
  if (Math.abs(strA.length - strB.length) != 1) return false

  let hash = {}
  let shorterString = strA.length < strB.length ? strA : strB
  let longerString = strA.length < strB.length ? strB : strA

  for (let i = 0; i < shorterString.length; i++) {
    if (!hash[shorterString[i]]) {
      hash[shorterString[i]] = 1
    }
    else hash[shorterString[i]] += 1
  }
  for (let i = 0; i < longerString.length; i++) {
    if (hash[longerString[i]]) {
      hash[longerString[i]] -= 1
      if (hash[longerString[i]] === 0) {
        delete hash[longerString[i]]
      }
    }
    else return longerString[i]
  }
  return false
}

// CodeSignal: StringsRearrangement: Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

//For inputArray = ["aba", "bbb", "bab"], the output should be stringsRearrangement(inputArray) = false

function getPermutations(array, length) {
  const output = []
  const swapInPlace = (a, b, arraySwap) => {
    let temp = arraySwap[a]
    arraySwap[a] = arraySwap[b]
    arraySwap[b] = temp
  }
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice())
      return
    }
    generate(n - 1, heapArr)
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(i, n - 1, heapArr)
      }
      else {
        swapInPlace(0, n - 1, heapArr)
      }
      generate(n - 1, heapArr)
    }
  }
  generate(array.length, array)
  return output
}
function stringsRearrangement(inputArray) {
  const allPerms = getPermutations(inputArray, inputArray.length)
  for (let i = 0; i < allPerms.length; i++) {
    let valid = true
    let currentPermArr = allPerms[i]
    for (let i = 1; i < currentPermArr.length; i++) {
      let currentPermPattern = currentPermArr[i]
      let prevPermPattern = currentPermArr[i - 1]
      let numOfDifferences = 0
      for (let k = 0; k < currentPermPattern.length; k++) {
        if (currentPermPattern[k] != prevPermPattern[k]) {
          numOfDifferences += 1
        }
      }
      if (numOfDifferences != 1) {
        valid = false
        break
      }
    }
    if (valid) return true
  }
  return false
}

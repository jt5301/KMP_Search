/*Single Cycle Check : algoexpert
  Given array of integers where each integer reps a jump in value.

*/
function hasSingleCycle(array) {
  let indexHash = {}
  for (let i = 0; i < array.length; i++) {
    indexHash[i] = false
  }
  let curIndex = 0
  while (true) {
    let jump = 0
    if (array[curIndex] > array.length || array[curIndex] < 0) {
      jump = Math.abs(array[curIndex]) % array.length
      array[curIndex] < 0 ? curIndex -= jump : curIndex += jump
    }
    else curIndex += array[curIndex]
    if (curIndex > array.length - 1) curIndex = curIndex - array.length
    if (curIndex < 0) curIndex = array.length + (curIndex % array.length)
    if (indexHash[curIndex] === true) break
    indexHash[curIndex] = true
  }
  for (let i in indexHash) {
    if (indexHash[i] === false) return false
  }
  return true
}

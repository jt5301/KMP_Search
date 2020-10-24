function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    let swapCheck = true
    for (let k = 0; k < i - 1; k++) {
      if (array[k] > array[k + 1]) {
        let temp = array[k + 1]
        array[k + 1] = array[k]
        array[k] = temp
        swapCheck = false
      }
    }
    if (swapCheck) return array
  }
  return array
}

class maxBinaryHeap {
  constructor(values) {
    this.values = values
  }
  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1
    while (index >= 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.values[index] > this.values[parentIndex]) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[index]
        this.values[index] = temp
        index = parentIndex
      }
      else break
    }
  }
  extractMax() {
    let maxVal = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values.pop()
    let index = 0
    while (index < this.values.length) {
      let left = (index * 2) + 1
      let right = (index * 2) + 2
      let max = Math.max(this.values[left], this.values[right])
      if (max === this.values[left] && this.values[index] < this.values[left]) {
        index = left
        let temp = this.values[left]
        this.values[left] = this.values[index]
        this.values[index] = temp
      }
      else {
        if (max === this.values[right] && this.values[index] < this.values[right]) {
          index = right
          let temp = this.values[right]
          this.values[right] = this.values[index]
          this.values[index] = temp
        }
        else break
      }
    }
    return maxVal
  }
}
test = new maxBinaryHeap([41, 39, 33, 18, 27, 12])

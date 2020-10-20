//essentially a min heap:

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority)
    this.values.push(newNode)
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
  dequeue() {
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

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}
// class PriorityQueue{//min heap, where root is lowest number
//   constructor(){
//     this.values=[]
//   }
//   enqueue(val,priority){
//     let newNode = new Node(val,priority)
//     this.values.push(newNode)
//     this.bubbleUp()//will insert the new element into the correct place
//   }
//   bubbleUp(){
//     let idx = this.values.length-1
//     const element = this.values[idx]
//     while(idx>0){
//       let parentIdx = Math.floor((idx-1)/2)
//       let parent = this.values[parentIdx]
//       if(element.priority>=parent.priority)break
//         this.values[parentIdx] = element
//         this.values[idx] = parent
//         idx = parentIdx
//     }
//   }
//   dequeue(){
//     let root = this.values[0]
//     this.values[0] = this.values[this.values.length-1]
//     this.values[this.values.length-1] = root
//     console.log(this.values)
//     let currentIdx = 0
//     let leftChild = (currentIdx*2)+1
//     let rightChild = (currentIdx*2)+2

//     while(this.values[currentIdx] < this.values[leftChild] || this.values[currentIdx] < this.values[rightChild]){
//       let toSwap = Math.min(this.values[rightChild],this.values[leftChild])
//       if(toSwap.priority === this.values[rightChild].priority){
//         this.values[rightChild]= this.values[currentIdx]
//         this.values[currentIdx] = toSwap
//         currentIdx = rightChild
//       }
//       else{
//         this.values[leftChild]= this.values[currentIdx]
//         this.values[currentIdx] = toSwap
//         currentIdx = leftChild
//       }
//       leftChild = (currentIdx*2)+1
//       rightChild = (currentIdx*2)+2
//     }
//     return this.values.pop()
//   }
// }
// let ER = new PriorityQueue()
// ER.enqueue('cold',5)
// ER.enqueue('shot',1)
// ER.enqueue('fever',4)


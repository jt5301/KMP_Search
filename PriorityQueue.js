//essentially a min heap:

class Node{
  constructor(val, priority){
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue{//min heap, where root is lowest number
  constructor(){
    this.values=[]
  }
  enqueue(val,priority){
    let newNode = new Node(val,priority)
    this.values.push(newNode)
    this.bubbleUp()//will insert the new element into the correct place
  }
  bubbleUp(){
    let idx = this.values.length-1
    const element = this.values[idx]
    while(idx>0){
      let parentIdx = Math.floor((idx-1)/2)
      let parent = this.values[parentIdx]
      if(element.priority>=parent.priority)break
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
    }
  }
  dequeue(){
    let root = this.values[0]
    this.values[0] = this.values[this.values.length-1]
    this.values[this.values.length-1] = root
    console.log(this.values)
    let currentIdx = 0
    let leftChild = (currentIdx*2)+1
    let rightChild = (currentIdx*2)+2

    while(this.values[currentIdx] < this.values[leftChild] || this.values[currentIdx] < this.values[rightChild]){
      let toSwap = Math.min(this.values[rightChild],this.values[leftChild])
      if(toSwap.priority === this.values[rightChild].priority){
        this.values[rightChild]= this.values[currentIdx]
        this.values[currentIdx] = toSwap
        currentIdx = rightChild
      }
      else{
        this.values[leftChild]= this.values[currentIdx]
        this.values[currentIdx] = toSwap
        currentIdx = leftChild
      }
      leftChild = (currentIdx*2)+1
      rightChild = (currentIdx*2)+2
    }
    return this.values.pop()
  }
}
let ER = new PriorityQueue()
ER.enqueue('cold',5)
ER.enqueue('shot',1)
ER.enqueue('fever',4)


class MaxBinaryHeap{
  constructor(){
    this.values=[41,39,33,18,27,12]
  }
  insert(element){
    this.values.push(element)
    this.bubbleUp()//will insert the new element into the correct place
  }
  bubbleUp(){
    let idx = this.values.length-1
    const element = this.values[idx]
    while(idx>0){
      let parentIdx = Math.floor((idx-1)/2)
      let parent = this.values[parentIdx]
      if(element<=parent)break
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
    }
  }
  extract(){
    let root = this.values[0]
    this.values[0] = this.values[this.values.length-1]
    let currentIdx = 0
    let leftChild = (currentIdx*2)+1
    let rightChild = (currentIdx*2)+2

    while(this.values[currentIdx] < this.values[leftChild] || this.values[currentIdx] < this.values[rightChild]){
      let toSwap = Math.max(this.values[rightChild],this.values[leftChild])
      if(toSwap === this.values[rightChild]){
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
let heap = new MaxBinaryHeap()
heap.insert(55)
console.log(heap.values)

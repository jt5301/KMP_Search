class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    else{
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length+=1
    return this
  }
  pop(){
    if(this.length===0){return undefined}
    let returnNode = this.tail
    if(this.length===1){
      this.head = null
      this.tail = null
    }
    else{
     this.tail = this.tail.prev
     this.tail.next = null
    }
    this.length-=1
    returnNode.prev = null
    return returnNode
   }
  shift(){
    if(this.length===0)return undefined
    let oldHead = this.head
    if(this.length===1){
      this.head = null
      this.tail = null
    }
    else{
      this.head = this.head.next
      this.head.prev = null
    }
    oldHead.next = null
    this.length -=1
    return oldHead
   }
  unshift(val){
    let newHead = new Node(val)
    if(this.length===0){
      this.head = newHead
      this.tail = newHead
    }
    let oldHead = this.head
    oldHead.prev = newHead
    this.head = newHead
    newHead.next = oldHead
    this.length+=1
    return this
  }
  get(index){
    if(index < 0 || index >=this.length)return null
    if (index <= this.length/2-1){
      console.log('working from start')
      let returnNode = this.head
      for(let i = 0;i<index;i++){
        returnNode = returnNode.next
      }
      return returnNode
    }
    else{
      console.log('working from end')
      let returnNode = this.tail
      for(let i = this.length-1;i>index;i--){
        returnNode = returnNode.prev
      }
      return returnNode
    }
  }
  set(val, ind){
    let changedNode = this.get(ind)
    if(changedNode){
      changedNode.val = val
      return true
    }
    return false
  }
  insert(index, val){
    if(index <0 || index >this.length)return false
    if(index===0)return !!this.unshift(val)
    if(index===this.length)return !!this.push(val)
    let newNode = new Node(val)
    let beforeNode = this.get(index-1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode

    newNode.next = afterNode
    afterNode.prev = newNode

    this.length+=1
    return true

  }
}

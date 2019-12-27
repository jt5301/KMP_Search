class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      let newNode = new Node(val);
      if(this.length===0){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
    if(this.length === 0)return undefined

      let pre = this.head
      let currentNode = pre.next
      while(currentNode.next != null){
        pre = currentNode
        currentNode = pre.next
      }
    this.length -=1
    if(this.length===0){
      this.head = null
      this.tail = null
    }
    this.tail = pre
    pre.next = null
    return currentNode.val
    }
  shift(){
    if(this.length===0)return undefined
    let returnHead = this.head
    let newHead = returnHead.next
    this.head = newHead
    this.length-=1
    return returnHead.value
  }
  unshift(val){
    let newHead = new Node(val)
    if(this.length===0){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
        newHead.next = this.head
        this.head = newHead

    }
    this.length+=1
    return this
  }
  get(ind){
    if(ind<0) return undefined
    if(ind===0) return this.head
    let returnVal = this.head
    for(let i = 0; i<ind;i++){
        returnVal = returnVal.next
    }
    return returnVal
  }
}



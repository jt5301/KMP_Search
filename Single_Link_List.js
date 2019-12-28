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
      this.tail = pre
      pre.next = null
      this.length -=1
      console.log(pre)
      return currentNode.val
  }
  shift(){
      if(this.length===0)return undefined
      let returnHead = this.head
      let newHead = returnHead.next
      this.head = newHead
      this.length-=1
      return returnHead
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
    insert(val, index){
    let newNode = new Node(val)
    if(index < 0 ||index > this.length) return false
    if(index === 0) return this.unshift(val)
    if(index===this.length) return this.push(val)
    let prevNode = this.get(index-1)
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length+=1
    return true
  }
  reverse(){
    /*happens in place:
    100 -> 201 -> 250 -> 350 -> 999 turns into:
    head                        tail

    100 <- 201 <- 250 <- 350 <- 999
    tail                        head
    or
    999 -> 350 -> 250 -> 201 -> 100
    head                        tail

    exampled will be filled in code lines
     */
    //switch head and tail
    let node = this.head //this is the original link list, used to help rearrange
    this.head = this.tail//this.head = 999. points to null
    this.tail = node //this.tail = 100. points to 201, which points t0 250...
    let prev = null
    let next = null
    for(let i = 0;i<this.length;i++){
        next = node.next
        node.next = prev
        prev = node
        node = next
    }
    /*in first iteration,
     node is 100
     next is 201, acquired from node.next(saved before next line changes the value)
     node.next set to prev(null)
     variable prev is set to node, 100
     variable node is set to next, 201

     in second iteration,
     node is 201
     next is 250, acquired from node.next
     node.next = prev, 100, which is the node from the prev iteration
     variable prev is set to node, 201
     variable node is set to next, 250

     in third iteration,
     node is 250
     node.next is 201, retrieved from prev. iteration
     next is 350, got from node.next, which is still preserving the original links
     prev is set to 250

     variable prev is moved to 250

     */

    return this
    }
}

class Node{
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
}

class BST{
  constructor(){
    this.root = null
  }
  insert(value){
    let newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
      return this
      }
    let current = this.root
      while(current.value){
        if(newNode.value < current.value){
          if(current.left){
          current = current.left
          }
          else {current.left = newNode
          return this
          }
        }
        else{
        if(newNode.value > current.value){
          if(current.right){
            current = current.right
            }
          else {current.right = newNode
            return this
          }
        }
      }
    }
  }
  find(value){
    if(!this.root)return false

    let current = this.root
    while(current.value != value){
      if(current.left ===null && current.right===null)return false
      if(value < current.value){
        if(current.left)current = current.left
        else return false

      }
      if(value > current.value){
        if(current.right)current = current.right
        else return false
      }
    }
    return true
  }
}

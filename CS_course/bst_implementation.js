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
  contains(value){
    if(this.root === null) return false;
    var current = this.root,
        found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
  }
  BFS(){
    let queue = [this.root]
    let returnArr = []
    while(queue.length != 0){
      let node = queue[0]
      if(node.left)queue.push(node.left)
      if(node.right)queue.push(node.right)
      returnArr.push(node.value)
      queue.shift()
    }
    return returnArr
  }
  DFSPre(){
    let values = []
    let current = this.root
    function nodeTraverse(node){
      values.push(node.value)
      if(node.left) nodeTraverse(node.left)
      if(node.right) nodeTraverse(node.right)
    }
    nodeTraverse(current)
    return values
  }
  DFSPost(){
    let values = []
    let current = this.root
    function nodeTraverse(node){
      if(node.left) nodeTraverse(node.left)
      if(node.right) nodeTraverse(node.right)
      values.push(node.value)
    }
    nodeTraverse(current)
    return values
  }
  DFSInOrder(){
    let values = []
    let current = this.root
    function nodeTraverse(node){
      if(node.left) nodeTraverse(node.left)
      values.push(node.value)
      if(node.right)nodeTraverse(node.right)
    }
    nodeTraverse(current)
    return values
  }
}
var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder())



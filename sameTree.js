// 100. Same Tree
// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

var isSameTree = function(p, q) {
  let inOrderArr = inOrderHelper(p,[])
  let inOrderArr2 = inOrderHelper(q,[])
  console.log(inOrderArr,inOrderArr2)
  let counter = Math.max(inOrderArr.length,inOrderArr2.length)
  for(let i = 0;i<counter;i++){
      if(inOrderArr[i]!=inOrderArr2[i])return false
  }
  return true
};

const inOrderHelper = (tree,array) => {
  if(!tree){
      array.push(null)
      return array
  }
  array.push(tree.val)
  inOrderHelper(tree.left,array)
  inOrderHelper(tree.right,array)
  return array
}

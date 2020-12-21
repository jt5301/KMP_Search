// 199. Binary Tree Right Side View

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]

//   1            <---
//  /  \
// 2    3         <---
//  \     \
//   5     4       <---


var rightSideView = function(root) {
  if(!root) return []
  let queue = [root]
  let tempQueue = []
  let returnValues = []
  while(queue.length!=0){
      let current = queue.shift()
      if(current.left)tempQueue.push(current.left)
      if(current.right)tempQueue.push(current.right)
      if(queue.length===0){
          returnValues.push(current.val)
          queue = tempQueue
          tempQueue = []
      }
  }
  return returnValues
};



// Given a binary tree 117

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

var connect = function (root) {
  if (!root) return null;
  let node = root;
  let queue = [node];
  while (queue.length != 0) {
    let queueSize = queue.length;
    let temp = []; //this inner queue keeps track of upcoming connections to make
    for (let i = 0; i < queueSize; i++) {
      let curNode = queue.shift();
      curNode.next = queue[0]; //this does the connections for the current level of connections
      if (curNode.left) {
        temp.push(curNode.left); //these push in the next level. the inner for loop runs for the duration dependent on how many nodes are pushed in
      }
      if (curNode.right) {
        temp.push(curNode.right);
      }
    }
    queue = temp;
  }
  return node;
};

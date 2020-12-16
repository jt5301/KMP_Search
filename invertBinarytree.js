//invert a binary tree
//       4
//     /   \
//   2       7
//   / \   / \
// 1    3 6    9

// 4
// /   \
// 7     2
// / \   / \
// 9   6 3   1
var invertTree = function (root) {
  if (root === null) return root
  let temp = root.right
  root.right = root.left
  root.left = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
};

/**
 * Title: Maximum Depth of Binary Tree
 * Description: A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let stack = [];
  let maxDepth = 0;
  if (root) {
    stack.push([root, 1]);
  }
  while (stack.length > 0) {
    let [node, depth] = stack.pop();
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return maxDepth;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));

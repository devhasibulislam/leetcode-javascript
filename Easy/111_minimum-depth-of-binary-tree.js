/**
 * Title: Minimum Depth of Binary Tree
 * Description: Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function (root) {
  let stack = [];
  let minDepth = 0;
  if (root) {
    stack.push([root, 1]);
  }
  while (stack.length > 0) {
    let [node, depth] = stack.pop();
    if (node) {
      if (node.left === null && node.right === null) {
        minDepth = minDepth === 0 ? depth : Math.min(minDepth, depth);
      }
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return minDepth;
};

console.log(minDepth([3, 9, 20, null, null, 15, 7]));

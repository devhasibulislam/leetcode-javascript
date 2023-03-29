/**
 * Title: Symmetric Tree
 * Description: Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let stack = [];
  stack.push([root, root]);
  while (stack.length > 0) {
    let [p, q] = stack.pop();
    if (p === null && q === null) {
      continue;
    }
    if (p === null || q === null) {
      return false;
    }
    if (p.val !== q.val) {
      return false;
    }
    stack.push([p.left, q.right]);
    stack.push([p.right, q.left]);
  }
  return true;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));

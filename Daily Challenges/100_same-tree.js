/**
 * Title: Same Tree
 * Description: Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let stack = [];
  stack.push([p, q]);
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
    stack.push([p.left, q.left]);
    stack.push([p.right, q.right]);
  }
  return true;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));

/**
 * Title: Binary Tree Inorder Traversal
 * Description: Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

console.log(inorderTraversal([1, null, 2, 3]));

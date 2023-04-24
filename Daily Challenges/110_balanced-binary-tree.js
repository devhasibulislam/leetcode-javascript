/**
 * Title: Balanced Binary Tree
 * Description: Given a binary tree, determine if it is height-balanced.
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
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

function height(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

console.log(isBalanced([3, 9, 20, null, null, 15, 7]));

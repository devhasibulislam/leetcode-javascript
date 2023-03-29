/**
 * Title: Convert Sorted Array to Binary Search Tree
 * Description: Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

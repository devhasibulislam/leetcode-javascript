/**
 * Title: Merge k Sorted Lists
 * Description: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
 * Author: Hasibul Islam
 * Date: 10/04/2023
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  let arr = [];

  //flatten
  function addNode(node) {
    if (node != null) {
      arr.push(node);
      addNode(node.next);
      node.next = null; //prevent leetcode Javascript heap out of memory
    }
  }
  lists.forEach(addNode);

  //sort
  if (arr.length > 1) {
    arr.sort((a, b) => a.val - b.val);
    arr.reduce((a, b) => (a.next = b));
  }

  return arr.length != 0 ? arr[0] : null;
};

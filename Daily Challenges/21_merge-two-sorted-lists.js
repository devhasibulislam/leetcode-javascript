/**
 * Title: Merge Two Sorted Lists
 * Description: Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let result = new ListNode(0, null);
  let current = result;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return result.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

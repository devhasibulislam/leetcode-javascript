/**
 * Title: Sort List
 * Description: Given the head of a linked list, return the list after sorting it in ascending order.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let groupSize = 1;
  let nodeCount = Infinity;
  let count = 0;

  const sortedHead = { next: head };

  while (groupSize < nodeCount) {
    let group1Head = sortedHead.next;
    let group2Head = sortedHead.next;
    let groupTail = sortedHead;

    while (group1Head) {
      let groupCount = 0;

      while (group2Head && groupCount < groupSize) {
        groupCount++;
        group2Head = group2Head.next;
      }

      let group1Used = 0;
      let group2Used = 0;

      while (
        (group1Head && group1Used < groupSize) ||
        (group2Head && group2Used < groupSize)
      ) {
        if (
          !group2Head ||
          group2Used >= groupSize ||
          (group1Used < groupSize && group1Head.val < group2Head.val)
        ) {
          groupTail.next = group1Head;
          group1Head = group1Head.next;
          group1Used++;
        } else {
          groupTail.next = group2Head;
          group2Head = group2Head.next;
          group2Used++;
        }
        groupTail = groupTail.next;
        count++;
      }

      group1Head = group2Head;
      groupTail.next = group2Head;
    }

    groupSize *= 2;
    if (nodeCount === Infinity) nodeCount = count;
  }

  return sortedHead.next;
};

/**
 * Title: Linked List Random Node
 * Description: Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.
 * Author: Hasibul Islam
 * Date: 30/03/2023
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
 */
var Solution = function (head) {
  this.head = head;
  this.map = new Map();
  let index = 0;
  while (head) {
    this.map.set(index++, head.val);
    head = head.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.map.size);
  return this.map.get(index);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

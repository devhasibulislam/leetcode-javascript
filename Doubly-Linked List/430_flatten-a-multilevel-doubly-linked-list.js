/**
 * Title: Flatten a Multilevel Doubly Linked List
 * Description: You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// JavaScript Implementation of zhiying_qian's solution

// Five situations:
// 1. null - no need to flatten, just return it
// 2. no child, no next - no need to flatten, it is the last element, just return it
// 3. no child, next - no need to flatten, go next
// 4. child, no next - flatten the child and done
// 5. child, next - flatten the child, connect it with the next, go next

var flatten = function (head) {
  function traverse(node) {
    if (node === null) return node; // CASE 1
    if (node.child === null) {
      if (node.next === null) return node; // CASE 2
      else {
        return traverse(node.next); // CASE 3
      }
    } else {
      let child = node.child;
      node.child = null;
      let next = node.next;
      node.next = child;
      child.prev = node;
      let childtail = traverse(child);
      if (next !== null) {
        // CASE 5
        childtail.next = next;
        next.prev = childtail;
        return traverse(next);
      }
      return childtail;
    }
  }
  traverse(head);
  return head;
};

var Node = function (val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;

  this.child = null;
  this.next = null;
  this.prev = null;
};

console.log(
  flatten(
    new Node(
      1,
      null,
      null,
      new Node(
        2,
        null,
        null,
        new Node(
          3,
          null,
          null,
          new Node(4, null, null, new Node(5, null, null, null))
        )
      )
    )
  )
);

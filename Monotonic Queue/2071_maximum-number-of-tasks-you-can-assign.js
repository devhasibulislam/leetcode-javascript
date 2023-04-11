/**
 * Title: Maximum Number of Tasks You Can Assign
 * Description: You have n tasks and m workers. Each task has a strength requirement stored in a 0-indexed integer array tasks, with the ith task requiring tasks[i] strength to complete. The strength of each worker is stored in a 0-indexed integer array workers, with the jth worker having workers[j] strength. Each worker can only be assigned to a single task and must have a strength greater than or equal to the task's strength requirement (i.e., workers[j] >= tasks[i]).
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  let m = workers.length;
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => b - a);
  let low = 0,
    high = m;
  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (canAssign(mid)) low = mid;
    else high = mid - 1;
  }
  return low;

  function canAssign(k) {
    let queue = new Deque(),
      pillsUsed = 0;
    for (let j = k - 1, i = 0; j >= 0; j--) {
      while (i < k && workers[j] + strength >= tasks[i]) {
        queue.push(tasks[i++]);
      }
      if (queue.isEmpty()) return false; // no do-able tasks
      if (queue.front() <= workers[j]) {
        // do the easiest task without using pill
        queue.shift();
      } else if (pillsUsed === pills) {
        return false;
      } else {
        // do the hardest task after using a pill
        pillsUsed++;
        queue.pop();
      }
    }
    return true;
  }
};

class Deque {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  unshift(val) {
    let node = new Node(val);
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }
  push(val) {
    let node = new Node(val);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  shift() {
    let head = this.head.next;
    this.removeNode(head);
    this.size--;
    return head.val;
  }
  pop() {
    let tail = this.tail.prev;
    this.removeNode(tail);
    this.size--;
    return tail.val;
  }
  removeNode(node) {
    if (!node.prev && !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
  front() {
    return this.head.next.val;
  }
  back() {
    return this.tail.prev.val;
  }
  isEmpty() {
    return this.size === 0;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
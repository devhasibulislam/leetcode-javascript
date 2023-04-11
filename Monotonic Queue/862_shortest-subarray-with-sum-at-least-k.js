/**
 * Title: Shortest Subarray with Sum at Least K
 * Description: Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    if (!this.head) {
      return null;
    }

    return this.head.val;
  }

  getTail() {
    if (!this.tail) {
      return null;
    }

    return this.tail.val;
  }

  add(val) {
    const node = new Node(val);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = this.tail.next;
    }

    this.size++;
  }

  removeTail() {
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.size--;
  }

  removeHead() {
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.size--;
  }
}

var shortestSubarray = function (nums, k) {
  const N = nums.length;
  const prefixSum = [0];

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let ans = N + 1;
  const monoq = new LinkedList();

  for (let i = 0; i < prefixSum.length; i++) {
    while (monoq.size && prefixSum[i] <= prefixSum[monoq.getTail()]) {
      monoq.removeTail();
    }

    // when i === 5, monoq: [0,2,3,4]
    while (monoq.size && prefixSum[i] - prefixSum[monoq.getHead()] >= k) {
      ans = Math.min(ans, i - monoq.getHead());
      monoq.removeHead();
    }

    monoq.add(i);
  }

  return ans === nums.length + 1 ? -1 : ans;
};

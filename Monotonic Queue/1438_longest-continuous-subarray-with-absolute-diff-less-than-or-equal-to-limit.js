/**
 * Title: Longest Continuous Subarray with Absolute Diff Less Than or Equal to Limit
 * Description: Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  class MaxMinStack {
    constructor() {
      this.stack = [];
      this.maxStack = [];
      this.minStack = [];
    }

    push(val) {
      this.stack.push(val);

      if (this.maxStack.length === 0) {
        this.maxStack.push(val);
      } else {
        const maxStackLen = this.maxStack.length;
        const lastMaxVal = this.maxStack[-1 + maxStackLen];
        if (val >= lastMaxVal) {
          this.maxStack.push(val);
        }
      }

      if (this.minStack.length === 0) {
        this.minStack.push(val);
      } else {
        const minStackLen = this.minStack.length;
        const lastMinVal = this.minStack[-1 + minStackLen];
        if (val <= lastMinVal) {
          this.minStack.push(val);
        }
      }
    }

    pop() {
      let result = this.stack.pop();
      const maxStackLen = this.maxStack.length;
      const lastMaxVal = this.maxStack[-1 + maxStackLen];
      if (result === lastMaxVal) {
        this.maxStack.pop();
      }

      const minStackLen = this.minStack.length;
      const lastMinVal = this.minStack[-1 + minStackLen];
      if (result === lastMinVal) {
        this.minStack.pop();
      }

      return result;
    }

    get length() {
      return this.stack.length;
    }

    get maxVal() {
      const maxStackLen = this.maxStack.length;
      const lastMaxVal = this.maxStack[-1 + maxStackLen];
      return lastMaxVal;
    }

    get minVal() {
      const minStackLen = this.minStack.length;
      const lastMinVal = this.minStack[-1 + minStackLen];
      return lastMinVal;
    }
  }

  class MaxMinQueue {
    constructor(stackCapacity) {
      this.stackA = new MaxMinStack();
      this.stackB = new MaxMinStack();
    }

    move() {
      while (this.stackB.length) {
        const removed = this.stackB.pop();
        this.stackA.push(removed);
      }
    }

    enqueue(val) {
      if (this.stackB.length === this.stackCapacity) {
        this.move();
      }
      this.stackB.push(val);
    }

    dequeue() {
      if (!this.stackA.length) {
        this.move();
      }

      let result = this.stackA.pop();
      return result;
    }

    get length() {
      return this.stackA.length + this.stackB.length;
    }

    get maxVal() {
      let result = -Infinity;
      if (this.stackA.length) {
        result = Math.max(result, this.stackA.maxVal);
      }
      if (this.stackB.length) {
        result = Math.max(result, this.stackB.maxVal);
      }

      return result;
    }

    get minVal() {
      let result = Infinity;
      if (this.stackA.length) {
        result = Math.min(result, this.stackA.minVal);
      }
      if (this.stackB.length) {
        result = Math.min(result, this.stackB.minVal);
      }

      return result;
    }
  }

  const len = nums.length;
  const queueSF = new MaxMinQueue(len);
  const firstVal = nums[0];
  queueSF.enqueue(firstVal);

  let result = 1;
  let low = 0,
    high = 0;
  function condition() {
    const minVal = queueSF.minVal;
    const maxVal = queueSF.maxVal;
    const diff = maxVal - minVal;

    if (diff <= limit) return true;
    else return false;
  }

  while (high < len) {
    for (; low < high && !condition(); low++) {
      queueSF.dequeue();
    }

    for (; high < len && condition(); high++, queueSF.enqueue(nums[high])) {
      const size = 1 + high - low;
      result = Math.max(result, size);
    }
  }

  return result;
};

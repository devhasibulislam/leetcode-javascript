/**
 * Title: Flatten Nested List Iterator
 * Description: You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.
 * Author: Hasibul Islam
 * Date: 08/04/2023
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = [];
  this.stack.push(nestedList);

  this.nextVal = null;
  this.hasNextVal = null;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  if (this.hasNextVal !== null) {
    return this.hasNextVal;
  }

  while (this.stack.length > 0) {
    let top = this.stack[this.stack.length - 1];
    if (top.length === 0) {
      this.stack.pop();
    } else {
      let first = top.shift();
      if (first.isInteger()) {
        this.nextVal = first.getInteger();
        this.hasNextVal = true;
        return true;
      } else {
        this.stack.push(first.getList());
      }
    }
  }

  this.hasNextVal = false;
  return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  if (this.nextVal !== null) {
    let next = this.nextVal;
    this.nextVal = null;
    this.hasNextVal = null;
    return next;
  }

  if (this.hasNext()) {
    let next = this.nextVal;
    this.nextVal = null;
    this.hasNextVal = null;
    return next;
  }

  return null;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

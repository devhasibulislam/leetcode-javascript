/**
 * Title: LRU Cache
 * Description: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

/**
 * @param {number} capacity
 */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(key, value) {
    const newNode = {
      key,
      value,
      prev: null,
      next: null,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
    return newNode;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      // if it's the only node
      this.head = null;
      this.tail = null;
    } else if (!node.prev) {
      // if it's the head
      this.head = node.next;
      this.head.prev = null;
    } else if (!node.next) {
      // if it's the tail
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      // if it's in between
      const next = node.next;
      const prev = node.prev;
      next.prev = prev;
      prev.next = next;
    }

    this.size--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.DLL = new DoublyLinkedList();
  }

  get(key) {
    if (!this.cache[key]) return -1;

    const value = this.cache[key].value;
    this.DLL.remove(this.cache[key]);
    this.cache[key] = this.DLL.push(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache[key]) this.DLL.remove(this.cache[key]);

    this.cache[key] = this.DLL.push(key, value);

    if (this.DLL.size > this.capacity) {
      const removeKey = this.DLL.head.key;
      this.DLL.remove(this.DLL.head);
      delete this.cache[removeKey];
    }
  }
}

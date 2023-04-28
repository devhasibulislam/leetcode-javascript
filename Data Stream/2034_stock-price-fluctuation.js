/**
 * Title: Stock Price Fluctuation
 * Description: You are given a stream of records about a particular stock. Each record contains a timestamp and the corresponding price of the stock at that timestamp.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

class Heap {
  constructor(func) {
    this.heap = [];
    this.func = func;
  }
  siftDown(idx, end, heap) {
    let child1 = idx * 2 + 1;
    while (child1 <= end) {
      let child2 = idx * 2 + 2 <= end ? idx * 2 + 2 : -1;
      let swapIdx;
      if (child2 !== -1 && this.shouldSwap(child2, child1)) {
        swapIdx = child2;
      } else {
        swapIdx = child1;
      }
      if (this.shouldSwap(swapIdx, idx)) {
        this.swap(swapIdx, idx, heap);
        idx = swapIdx;
        child1 = idx * 2 + 1;
      } else return;
    }
  }
  siftUp(idx, heap) {
    let parent = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.shouldSwap(idx, parent)) {
      this.swap(idx, parent, heap);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  peek() {
    return this.heap[0];
  }
  poll() {
    this.swap(0, this.heap.length - 1, this.heap);
    let valueToReturn = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToReturn;
  }
  offer(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  shouldSwap(idx1, idx2) {
    return this.func(this.heap[idx1], this.heap[idx2]);
  }
}

class StockPrice {
  constructor() {
    this.max = new Heap((a, b) => a[1] > b[1]);
    this.min = new Heap((a, b) => a[1] < b[1]);
    this.latestTime = -1;
    this.prices = {};
  }
  update(timestamp, price) {
    // update price in map
    this.prices[timestamp] = price;
    // update max
    this.max.offer([timestamp, price]);
    while (this.max.peek()[1] !== this.prices[this.max.peek()[0]])
      this.max.poll();
    // update min
    this.min.offer([timestamp, price]);
    while (this.min.peek()[1] !== this.prices[this.min.peek()[0]])
      this.min.poll();
    // update latest time
    this.latestTime = Math.max(this.latestTime, timestamp);
  }
  current() {
    // O(1)
    return this.prices[this.latestTime];
  }
  maximum() {
    // O(1)
    return this.max.peek()[1];
  }
  minimum() {
    // O(1)
    return this.min.peek()[1];
  }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

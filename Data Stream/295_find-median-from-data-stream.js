/**
 * Title: Find Median from Data Stream
 * Description: The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

class MedianFinder {
  //Initilize max and min heap
  constructor() {
    this.minHeap = new MinPriorityQueue(); //supported by leetcode
    this.maxHeap = new MaxPriorityQueue();
  }

  addNum(num) {
    //add to min and pop the top for max to keep them in the order that we want
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue().element);
    //balance them
    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
    //console.log(this.minHeap.toArray(), this.maxHeap.toArray()) //run this to understand better
  }

  findMedian() {
    if (this.minHeap.size() > this.maxHeap.size())
      // if one is bigger 21 and 345 example just pop from 345(min heap)
      return this.minHeap.front().element;
    else
      return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // 21 and 34 example, pop 1 and 3 and find average
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * Title: Network Delay Time
 * Description: You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//min heap Class using array and  sort let's assume that TC:log(n)
class Minheap {
  heap = [];
  constructor(val) {
    this.heap.push(val);
  }
  size() {
    return this.heap.length;
  }
  heapify() {
    this.heap.sort((a, b) => b[0] - a[0]);
  }
  push(val) {
    this.heap.push(val);
  }
  pop() {
    return this.heap.pop();
  }
}

var networkDelayTime = function (times, n, k) {
  //create Ajececy list
  const graph = {};
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let [s, d, w] of times) graph[s].push([w, d]);

  const visited = new Set();
  const heap = new Minheap([0, k]);
  let t = 0;

  //while our heap is not empy
  while (heap.size() > 0) {
    const [w, n] = heap.pop();
    if (visited.has(n)) continue;

    visited.add(n);
    t = Math.max(t, w);

    // Start BFS traversal
    for (let [w1, n1] of graph[n]) {
      if (visited.has(n1)) continue;
      heap.push([w1 + w, n1]);
    }

    heap.heapify();
  }

  return visited.size === n ? t : -1;
};

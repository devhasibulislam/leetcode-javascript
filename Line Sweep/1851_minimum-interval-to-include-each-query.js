/**
 * Title: Minimum Interval to Include Each Query
 * Description: You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.
 * Author: Hasibul Islam
 * Date: 30/03/2023
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
  //sort intervals and queries so we can process them in order
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  // careful here when sorting queries we must make a shallow copy so we dont sort the original array
  let sortedQueries = [...queries].sort((a, b) => a - b);
  let minInterval = {};
  // use min heap to keep track of the smallest interval
  let heap = new MinPriorityQueue({ priority: (a) => a[1] - a[0] + 1 });
  // pointer tracks our position in intervals
  let pointer = 0;

  for (const query of sortedQueries) {
    // if we have already seen the query value before we know the minimum interval
    if (minInterval[query]) continue;
    // advancing our pointer until we find a new interval that contains our query
    while (pointer < intervals.length && intervals[pointer][1] < query) {
      pointer++;
    }
    // adding new intervals that arent in our heap that our query fits inside
    while (pointer < intervals.length && intervals[pointer][0] <= query) {
      heap.enqueue(intervals[pointer]);
      pointer++;
    }
    // removing the top interval until we run out of elements or we find an interval that our query fits inside
    while (heap.size() && heap.front().element[1] < query) {
      heap.dequeue();
    }
    // keep track of each query value
    minInterval[query] = heap.size() ? heap.front().priority : -1;
  }
  let ans = [];
  // since we sorted the queries earlier to get the proper order
  //we must go back through our queries and look up their value in the stored hash
  for (let i = 0; i < queries.length; i++) {
    ans[i] = minInterval[queries[i]];
  }
  return ans;
};

console.log(
  minInterval(
    [
      [1, 4],
      [2, 4],
      [3, 6],
      [4, 4],
    ],
    [2, 3, 4, 5]
  )
);

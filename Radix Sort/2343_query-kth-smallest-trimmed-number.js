/**
 * Title: Query Kth Smallest Trimmed Number
 * Description: You are given a 0-indexed array of strings nums, where each string is of equal length and consists of only digits.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  // create query index mapping and sort it to match the direction of our bucket sort
  const queriesByTrimLength = queries
    .map((_, i) => i)
    .sort((a, b) => queries[a][1] - queries[b][1]);

  // num mapping which we'll bucket sort and use to fill in our answer with indices
  const numIndices = nums.map((_, i) => i);
  const numLength = nums[0].length;
  // index of the current digit we're sorting
  let digit = 0;

  return queriesByTrimLength.reduce(
    (queryAnswers, queryIdx) => {
      const [k, trim] = queries[queryIdx];

      // sort until we reach the index they want us to query
      while (trim > digit) {
        digit += 1;
        bucketSort(numIndices, nums, numLength - digit);
      }

      queryAnswers[queryIdx] = numIndices[k - 1];
      return queryAnswers;
    },
    queries.map(() => 0)
  );
};

const bucketSort = (indices, nums, digit) => {
  const buckets = new Array(10).fill(0).map(() => []);

  for (const idx of indices) buckets[+nums[idx][digit]].push(idx);

  let current = 0;
  for (const bucket of buckets) {
    for (const idx of bucket) {
      indices[current] = idx;
      current += 1;
    }
  }
};

console.log(
  smallestTrimmedNumbers(
    ["102", "473", "251", "814"],
    [
      [1, 1],
      [2, 3],
      [4, 2],
      [1, 2],
    ]
  )
);

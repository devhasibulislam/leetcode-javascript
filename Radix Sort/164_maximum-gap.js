/**
 * Title: Maximum Gap
 * Description: Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  const bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  const buckets = new Array(bucketCount).fill(null).map(() => ({
    min: Infinity,
    max: -Infinity,
  }));

  for (const num of nums) {
    const bucketIdx = Math.floor((num - min) / bucketSize);

    buckets[bucketIdx].min = Math.min(buckets[bucketIdx].min, num);
    buckets[bucketIdx].max = Math.max(buckets[bucketIdx].max, num);
  }

  let maxGap = 0;
  let prevBucketMax = min;

  for (const bucket of buckets) {
    if (bucket.min === Infinity) continue;

    maxGap = Math.max(maxGap, bucket.min - prevBucketMax);
    prevBucketMax = bucket.max;
  }

  return maxGap;
};

console.log(maximumGap([3, 6, 9, 1]));

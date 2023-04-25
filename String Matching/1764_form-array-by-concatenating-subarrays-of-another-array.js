/**
 * Title: From Array by Concatenating Subarrays of Another Array
 * Description: You are asked if you can choose n disjoint subarrays from the array nums such that the ith subarray is equal to groups[i] (0-indexed), and if i > 0, the (i-1)th subarray appears before the ith subarray in nums (i.e. the subarrays must be in the same order as groups).
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  const patterns = [];
  for (const group of groups) {
    patterns.push(buildPattern(group));
  }

  let i = 0; // groups
  let j = 0; // groups[i]
  let k = 0; // nums

  while (i < groups.length) {
    const currGroup = groups[i];
    const currPattern = patterns[i];

    while (j < currGroup.length && k < nums.length) {
      if (currGroup[j] === nums[k]) {
        j++;
        k++;
      } else if (j > 0) {
        j = currPattern[j - 1] + 1;
      } else {
        k++;
      }
    }

    if (j < currGroup.length) return false;

    // move to next group
    i++;
    j = 0;
  }

  return i === groups.length;
};

function buildPattern(group) {
  let j = 0;
  let i = 1;

  const pattern = new Array(group.length).fill(-1);
  while (i < group.length) {
    if (group[j] === group[i]) {
      pattern[i] = j;
      j++;
      i++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }

  return pattern;
}

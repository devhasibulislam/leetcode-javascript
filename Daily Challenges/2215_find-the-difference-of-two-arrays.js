/**
 * Title: Find the Difference of Two Arrays
 * Description: Note that the integers in the lists may be returned in any order.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let csm = [];
  csm[0] = [...set1].filter((x) => !set2.has(x));
  csm[1] = [...set2].filter((x) => !set1.has(x));
  return csm;
};

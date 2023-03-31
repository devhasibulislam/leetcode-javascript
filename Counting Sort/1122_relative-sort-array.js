/**
 * Title: Relative Sort Array
 * Description: Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1 Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let arr1Count = new Array(1001).fill(0);
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1Count[arr1[i]]++;
  }
  for (let i = 0; i < arr2.length; i++) {
    while (arr1Count[arr2[i]] > 0) {
      result.push(arr2[i]);
      arr1Count[arr2[i]]--;
    }
  }
  for (let i = 0; i < arr1Count.length; i++) {
    while (arr1Count[i] > 0) {
      result.push(i);
      arr1Count[i]--;
    }
  }
  return result;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);

/**
 * Title: Count of Smaller Numbers After Self
 * Description: Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].
 * Author: Hasibul Islam
 * Date: 10/04/2023
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  /*
    Approach: use merge sort and count inverses 
    */
  let counts = [],
    indexMapArr = [];
  for (let i = 0; i < nums.length; i++) {
    counts[i] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    indexMapArr.push([nums[i], i]);
  }
  mergeSort(0, nums.length - 1, indexMapArr);
  return counts;

  function mergeSort(left, right, arr, order = 1) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      mergeSort(left, mid, arr, order);
      mergeSort(mid + 1, right, arr, order);
      merge(left, mid, right, arr, order);
    }
    return arr;
  }
  function merge(left, mid, right, arr, order) {
    let leftArr = [],
      rightArr = [],
      mainCounter = left,
      leftCounter = 0,
      rightCounter = 0,
      inversions = 0;
    for (let i = left; i <= mid; i++) {
      leftArr.push(arr[i]);
    }
    for (let i = mid + 1; i <= right; i++) {
      rightArr.push(arr[i]);
    }
    while (leftCounter < leftArr.length && rightCounter < rightArr.length) {
      if (order !== -1) {
        //For sorting in ascending order
        if (leftArr[leftCounter][0] <= rightArr[rightCounter][0]) {
          counts[leftArr[leftCounter][1]] += inversions;
          arr[mainCounter] = leftArr[leftCounter++];
        } else {
          inversions++;
          arr[mainCounter] = rightArr[rightCounter++];
        }
      } else {
        //For sorting in descending order
        if (leftArr[leftCounter] >= rightArr[rightCounter]) {
          arr[mainCounter] = leftArr[leftCounter++];
        } else {
          arr[mainCounter] = rightArr[rightCounter++];
        }
      }
      mainCounter++;
    }
    while (leftCounter < leftArr.length) {
      counts[leftArr[leftCounter][1]] += inversions;
      arr[mainCounter] = leftArr[leftCounter++];
      mainCounter++;
    }
    while (rightCounter < rightArr.length) {
      arr[mainCounter] = rightArr[rightCounter++];
      mainCounter++;
    }
  }
};

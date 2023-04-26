/**
 * Title: First Bad Version
 * Description: You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 * Author: Hasibul Islam
 * Date: 26/04/2023
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  };
};

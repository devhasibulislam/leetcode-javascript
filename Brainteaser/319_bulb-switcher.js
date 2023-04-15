/**
 * Title: Bulb Switcher
 * Description: There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  let ret = 0;
  for (let j = 0, k = 0; j < n; j = j + 2 * (k + 1) + 1, k++) {
    ret++;
  }
  return ret;
};

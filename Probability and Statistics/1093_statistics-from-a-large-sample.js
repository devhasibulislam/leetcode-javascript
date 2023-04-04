/**
 * Title: Statistics from a Large Sample
 * Description: You are given a large sample of integers in the range [0, 255]. Since the sample is so large, it is represented by an array count where count[k] is the number of times that k appears in the sample.
 * Author: Hasibul Islam
 * Date: 04/04/2023
 */

/**
 * @param {number[]} count
 * @return {number[]}
 */
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let res = new Array();
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      res.push(i);
      break;
    }
  }
  for (let i = count.length - 1; i >= 0; i--) {
    if (count[i] > 0) {
      res.push(i);
      break;
    }
  }
  let sum = count.reduce((acc, cur, ind) => acc + ind * cur, 0);
  let len = count.reduce((acc, cur, ind) => acc + cur, 0);
  res.push(sum / len);

  if (len % 2 == 0) {
    let cur = 0,
      prev = 0;
    for (let i = 0; i < count.length; i++) {
      if (len - (cur + count[i]) > len / 2 - 1) {
        if (count[i] > 0) prev = i;
        cur += count[i];
      } else {
        if (len - cur == len / 2) res.push((prev + i) / 2);
        else res.push(i);
        break;
      }
    }
  } else {
    let cur = 0;
    for (let i = 0; i < count.length; i++) {
      if (len - (cur + count[i]) >= len / 2) {
        cur += count[i];
      } else {
        res.push(i);
        break;
      }
    }
  }

  res.push(count.indexOf(Math.max(...count)));

  return res;
};

console.log(sampleStats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

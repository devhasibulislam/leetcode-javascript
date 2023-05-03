/**
 * Title: Count Anagrams
 * Description: You are given a string s containing one or more words. Every consecutive pair of words is separated by a single space ' '.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function (s) {
  const BIGINT_MODULO = BigInt(Math.pow(10, 9) + 7);
  function countWord(word) {
    let map = new Map();
    for (let c of word) {
      let cnt = map.get(c) || 0;
      cnt++;
      map.set(c, cnt);
    }

    if (map.size === 1) return 1n;
    else {
      let finalResult = 1n;
      let cnts = Array.from(map.values())
        .sort((a, b) => a - b)
        .map((val) => BigInt(val));
      let sum = BigInt(word.length);
      let choice = sum;

      for (let i = 0; i < cnts.length - 1; i++) {
        let cnt = cnts[i];
        let combinations = 1n;
        let devisor = 1n;
        while (cnt > 0n) {
          combinations *= choice--;
          devisor *= cnt;
          cnt--;
        }
        finalResult *= combinations / devisor;
      }

      return finalResult;
    }
  }

  let ans = 1n;
  for (let word of s.split(" ")) {
    ans *= countWord(word);
    ans %= BIGINT_MODULO;
  }

  return Number(ans);
};

/**
 * Title: Dota2 Senate
 * Description: Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let radiant = [],
    dire = [];

  const n = senate.length;

  for (let i = 0; i < n; i++)
    senate[i] === "R" ? radiant.push(i) : dire.push(i);

  while (radiant.length && dire.length) {
    let r_idx = radiant.shift(),
      d_idx = dire.shift();

    d_idx < r_idx ? dire.push(d_idx + n) : radiant.push(r_idx + n);
  }

  return dire.length ? "Dire" : "Radiant";
};

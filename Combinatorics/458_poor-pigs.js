/**
 * Title: Poor Pigs
 * Description: There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = (n, m, p) => Math.ceil(Math.log10(n) / Math.log10(p / m + 1));

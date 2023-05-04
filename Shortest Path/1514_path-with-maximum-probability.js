/**
 * Title: Path with Maximum Probability
 * Description: You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const nei = [...Array(n)].map(() => []);

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    nei[a].push([b, succProb[i]]);
    nei[b].push([a, succProb[i]]);
  }

  const probs = new Array(n).fill(0);
  let queue = [start];
  probs[start] = 1;

  while (queue.length) {
    let next = [];
    for (let i of queue) {
      for (let [j, p] of nei[i]) {
        if (probs[i] * p > probs[j]) {
          next.push(j);
          probs[j] = probs[i] * p;
        }
      }
    }
    queue = next;
  }

  return probs[end];
};

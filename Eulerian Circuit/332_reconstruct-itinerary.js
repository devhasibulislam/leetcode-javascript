/**
 * Title: Reconstruct Itinerary
 * Description: You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = {};
  const result = [];

  for (const [from, to] of tickets) {
    if (graph[from] === undefined) {
      graph[from] = [];
    }

    graph[from].push(to);
  }

  for (const from in graph) {
    graph[from].sort();
  }

  const dfs = (from) => {
    const destinations = graph[from];

    while (destinations && destinations.length > 0) {
      dfs(destinations.shift());
    }

    result.unshift(from);
  };

  dfs("JFK");

  return result;
};

console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ])
);

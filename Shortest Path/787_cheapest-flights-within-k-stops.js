/**
 * Title: Cheapest Flights Within K Stops
 * Description: There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let dMap = new Map();

  for (let x = 0; x < flights.length; x++) {
    const [from, to, price] = flights[x];
    if (dMap.has(from)) {
      let theArray = dMap.get(from);
      theArray[to] = price;
      dMap.set(from, theArray);
    } else {
      let theArray = new Array(n).fill(-1);
      theArray[from] = 0;
      theArray[to] = price;
      dMap.set(from, theArray);
    }
  }
  // Map structure = < nodeIndex, [cost price to directly connect to other node]

  //return -1 if there's src node has to edge to other node
  if (!dMap.has(src)) return -1;

  //BFS on src path
  let theQ = [[dMap.get(src), 0]];
  let numOfStop = 0;
  const dist = new Array(n).fill(Infinity);
  let temp = [];
  while (numOfStop <= k && theQ.length > 0) {
    temp = [];
    for (let y = 0; y < theQ.length; y++) {
      const [city, cost] = theQ[y];

      for (let x = 0; x < city.length; x++) {
        if (city[x] !== 0 && city[x] !== -1) {
          if (city[x] + cost >= dist[x]) continue;

          dist[x] = cost + city[x];
          if (dMap.has(x)) {
            temp.push([dMap.get(x), cost + city[x]]);
          }
        }
      }
    }

    numOfStop++;
    theQ = temp;
  }
  return dist[dst] !== Infinity ? dist[dst] : -1;
};

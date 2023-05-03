/**
 * Title: Count Ways to Build Rooms in an Ant Colony
 * Description: You are an ant tasked with adding n new rooms numbered 0 to n-1 to your colony. You are given the expansion plan as a 0-indexed integer array of length n, prevRoom, where prevRoom[i] indicates that you must build room prevRoom[i] before building room i, and these two rooms must be connected directly. Room 0 is already built, so prevRoom[0] = -1. The expansion plan is given such that once all the rooms are built, every room will be reachable from room 0.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[]} prevRoom
 * @return {number}
 */
var waysToBuildRooms = function (prevRoom) {
  let tree = [],
    factorial = [1n],
    invFactorial = [1n],
    mod = BigInt(1e9 + 7);

  var findModularMultiplicativeInverse = (a) => {
    let i = mod - 2n,
      product = 1n;

    while (i) {
      if (i % 2n) product = (product * a) % mod;
      i /= 2n;
      a = (a * a) % mod;
    }

    return product;
  };

  for (let i = 1; i < prevRoom.length; i++) {
    tree[prevRoom[i]] ? tree[prevRoom[i]].push(i) : (tree[prevRoom[i]] = [i]);
    factorial[i] = (factorial[i - 1] * BigInt(i)) % mod;
    invFactorial[i] = findModularMultiplicativeInverse(factorial[i]);
  }

  var dfs = (cur) => {
    let nodes = 0n,
      ways = 1n;

    if (tree[cur]) {
      for (const node of tree[cur]) {
        const subtree = dfs(node);
        ways =
          (ways *
            ((subtree.ways *
              ((invFactorial[nodes] *
                ((factorial[nodes + subtree.nodes] *
                  invFactorial[subtree.nodes]) %
                  mod)) %
                mod)) %
              mod)) %
          mod;
        nodes += subtree.nodes;
      }
    }

    nodes += 1n;

    return { ways, nodes };
  };

  return dfs(0).ways;
};

/*
Memory overflow

var waysToBuildRooms = function(prevRoom) {
    let tree = [], mod = BigInt(1e9 + 7), comb = new Map();

    for (let i = 1; i < prevRoom.length; i++)
        tree[prevRoom[i]] ? tree[prevRoom[i]].push(i) : tree[prevRoom[i]] = [i];

    var combination = (m, n) => {
        if (m === 1n)
            return 1n;
        
        if (comb.has(`${m},${n}`))
            return comb.get(`${m},${n}`);
            
        let ans = 1n;

        for (let i = 1n ; i <= n; i += 1n, m += 1n)
            ans = ans * m / i;

        comb.set(`${m - n},${n}`, ans);

        return ans;
    };

    var dfs = (cur) => {
        let nodes = 0n, ways = 1n;

        if (tree[cur]) {
            for (const node of tree[cur]) {
                const subtree = dfs(node);
                ways = (ways * (subtree.ways * combination(nodes + 1n, subtree.nodes) % mod) % mod);
                nodes += subtree.nodes;
            }
        }

        nodes += 1n;

        return {
            ways,
            nodes
        }
    };

    return dfs(0).ways;
};
*/

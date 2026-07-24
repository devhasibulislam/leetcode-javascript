# leetcode-javascript

**227 LeetCode solutions in JavaScript, grouped by the algorithm behind them.**

I worked through these across 2022 and 2023, focusing on LeetCode's harder tags. Categories here are organized by the underlying pattern (bucket sort, monotonic queue, rolling hash, etc.) rather than by difficulty, so problems that share a technique sit next to each other and reinforce it.

- 227 problems
- 28 categories, weighted toward the ones people usually skip: advanced graph, string, geometry, sampling, and combinatorial algorithms
- JavaScript (ES6+), ESLint-configured, MIT-licensed

## Categories

Sorted by number of problems.

| Category | Problems | Focus |
|---|---:|---|
| Daily Challenges | 45 | Mixed daily-problem archive |
| Game Theory | 18 | Adversarial and minimax patterns |
| Combinatorics | 17 | Counting, permutations, anagrams |
| Shortest Path | 15 | Dijkstra, Bellman-Ford, BFS on weighted graphs |
| Data Stream | 12 | Online algorithms over infinite input |
| String Matching | 12 | KMP, Rabin-Karp, substring search |
| Monotonic Queue | 11 | Sliding-window optimizations |
| Rolling Hash | 11 | Substring hashing, palindrome detection |
| Brainteaser | 10 | Constant-time and observation-based puzzles |
| Merge Sort | 8 | Divide-and-conquer counting and inversions |
| Doubly-Linked List | 6 | LRU, text editor, deque designs |
| Randomized | 6 | Randomized geometry and search |
| Interactive | 5 | Query-limited problems |
| Iterator | 5 | Custom traversal designs |
| Probability and Statistics | 5 | Expected value, distributions |
| Quickselect | 5 | Kth-element partitioning |
| Bucket Sort | 4 | Frequency-based ordering |
| Counting Sort | 4 | Integer-key sorting |
| Line Sweep | 4 | Interval union, event processing |
| Reservoir Sampling | 4 | Stream sampling with bounded memory |
| Shell | 4 | Bash and awk one-liners |
| Suffix Array | 4 | String scoring, palindromic substrings |
| Eulerian Circuit | 3 | Hierholzer's algorithm |
| Radix Sort | 3 | Digit-by-digit ordering |
| Rejection Sampling | 2 | Random point generation |
| Strongly Connected Component | 2 | Tarjan, Kosaraju |
| Biconnected Component | 1 | Critical connections (Tarjan) |
| Minimum Spanning Tree | 1 | Kruskal, Prim |

## Layout

```
<Category>/
  <Problem Name>/
    <solution>.js
```

Every category folder stands on its own. Open any directory to see the problems solved under that pattern.

## Why these categories

Most LeetCode grinds stop at arrays, hashing, trees, and DP. I went the other way on purpose and reached for the categories most working engineers never touch: string matching with rolling hashes, biconnected components, Eulerian circuits, reservoir sampling. Those show up in real systems work (rate-limiter sampling, network partition detection, streaming deduplication) but almost never in interview prep.

## License

[MIT](LICENSE) © Hasibul Islam

---

Part of my public work as a Senior Backend Architect. See my [profile README](https://github.com/devhasibulislam) for production systems and other public repos.

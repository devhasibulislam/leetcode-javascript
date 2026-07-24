# leetcode-javascript

**227 LeetCode solutions in JavaScript, organized by algorithm category.**

Written between 2022–2023 while systematically working through LeetCode's harder tags. Each file contains a working solution; categories are grouped by the underlying data structure or algorithmic pattern rather than by difficulty, so related problems live together and reinforce the same technique.

## At a glance

- **227 problems** solved
- **28 categories** covering advanced graph, string, geometry, sampling, and combinatorial algorithms
- **JavaScript (ES6+)**, ESLint-configured, MIT-licensed

## Categories

Sorted by number of problems solved.

| Category | Problems | Focus |
|---|---:|---|
| Daily Challenges | 45 | Mixed daily-problem archive |
| Game Theory | 18 | Adversarial / minimax patterns |
| Combinatorics | 17 | Counting, permutations, anagrams |
| Shortest Path | 15 | Dijkstra, Bellman-Ford, BFS on weighted graphs |
| Data Stream | 12 | Online algorithms over infinite input |
| String Matching | 12 | KMP, Rabin-Karp, substring search |
| Monotonic Queue | 11 | Sliding-window optimizations |
| Rolling Hash | 11 | Substring hashing, palindrome detection |
| Brainteaser | 10 | Constant-time / observation-based puzzles |
| Merge Sort | 8 | Divide-and-conquer counting / inversions |
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
| Shell | 4 | Bash / awk one-liners |
| Suffix Array | 4 | String scoring, palindromic substrings |
| Eulerian Circuit | 3 | Hierholzer's algorithm |
| Radix Sort | 3 | Digit-by-digit ordering |
| Rejection Sampling | 2 | Random point generation |
| Strongly Connected Component | 2 | Tarjan / Kosaraju |
| Biconnected Component | 1 | Critical connections (Tarjan) |
| Minimum Spanning Tree | 1 | Kruskal / Prim |

## Repository layout

```
<Category>/
  <Problem Name>/
    <solution>.js
```

Each category folder is self-contained; open any directory to see the problems solved under that pattern.

## Why these categories

Most LeetCode grinds stop at arrays, hashing, trees, and DP. This repo intentionally reaches into the categories most working engineers *don't* touch — string matching with rolling hashes, biconnected components, Eulerian circuits, reservoir sampling — because those techniques show up in real systems work (rate-limiter sampling, network partition detection, streaming deduplication) but are usually skipped in interview prep.

## License

[MIT](LICENSE) © Hasibul Islam

---

Part of my public work as a Senior Backend Architect. See my [profile README](https://github.com/devhasibulislam) for production systems and open-source contributions.

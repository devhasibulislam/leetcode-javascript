/**
 * Title: Sequentially Ordinal Rank Tracker
 * Description: A scenic location is represented by its name and attractiveness score, where name is a unique string among all locations and score is an integer. Locations can be ranked from the best to the worst. The higher the score, the better the location. If the scores of two locations are equal, then the location with the lexicographically smaller name is better.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

class AVLNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.cnt = 1;
    this.SubTreeNodes = 1;
  }
}

const lexical_smallest_comp = (x, y) => (x < y ? -1 : x > y ? 1 : 0);

class AVLTree {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
    this.tot = 0;
  }
  cmp(x, y) {
    // compare nodes: x is inserted item
    if (x == null || y == null) return 0;
    if (Array.isArray(x) || Number.isInteger(x)) x = new AVLNode(x);
    if (Array.isArray(y) || Number.isInteger(y)) y = new AVLNode(y);
    if (Array.isArray(x.val) || Array.isArray(y.val)) {
      // array compare (can change like PQ)
      // this problem comparator
      if (Array.isArray(x.val) && Array.isArray(y.val)) {
        if (x.val[1] != y.val[1]) return y.val[1] - x.val[1]; // first priority: larger score comes first
        return lexical_smallest_comp(x.val[0], y.val[0]); // second priority: lexical smaller comes first
      } else {
        return 0;
      }
    } else if (Number.isInteger(x.val) || Number.isInteger(y.val)) {
      // number compare
      if (Number.isInteger(x.val) && Number.isInteger(y.val)) {
        return x.val - y.val;
      } else {
        return 0;
      }
    }
    return 0;
  }
  getHeight(node) {
    return node != null ? node.height : 0;
  }
  getBalance(node) {
    return node != null
      ? this.getHeight(node.left) - this.getHeight(node.right)
      : 0;
  }
  update(node) {
    let leftHeight = this.getHeight(node.left),
      rightHeight = this.getHeight(node.right);
    node.height = 1 + Math.max(leftHeight, rightHeight);
    node.SubTreeNodes =
      1 +
      (node.left != null ? node.left.SubTreeNodes : 0) +
      (node.right != null ? node.right.SubTreeNodes : 0);
  }
  LR(z) {
    let y = z.right;
    let T2 = y.left;
    y.left = z;
    z.right = T2;
    this.update(z);
    this.update(y);
    return y;
  }
  RR(z) {
    let y = z.left;
    let T3 = y.right;
    y.right = z;
    z.left = T3;
    this.update(z);
    this.update(y);
    return y;
  }
  insert(item) {
    this.root = this.insertUtil(this.root, item);
  }
  insertUtil(node, item) {
    if (node == null) {
      // find place to insert
      this.nodeCount++;
      this.tot++;
      return new AVLNode(item);
    } else if (this.cmp(item, node) < 0) {
      node.left = this.insertUtil(node.left, item);
    } else if (this.cmp(item, node) > 0) {
      node.right = this.insertUtil(node.right, item);
    } else {
      node.cnt++;
      this.tot++;
      return node;
    }
    this.update(node);
    return this.rebalanceAfterInsert(node, item);
  }
  remove(v) {
    this.root = this.removeUtil(this.root, v);
  }
  removeUtil(node, item) {
    if (node == null) {
      return node;
    } else if (this.cmp(item, node) < 0) {
      node.left = this.removeUtil(node.left, item);
    } else if (this.cmp(item, node) > 0) {
      node.right = this.removeUtil(node.right, item);
    } else {
      // find node
      if (node.cnt > 1) {
        // current node > 1, remove 1, tree size keep the same
        node.cnt--;
        this.tot--;
        return node;
      } else {
        // current node == 1, delete, tree size--
        this.nodeCount--;
        this.tot--;
      }
      // delete process
      if (node.left == null) {
        let tmp = node.right;
        node = null;
        return tmp;
      } else if (node.right == null) {
        let tmp = node.left;
        node = null;
        return tmp;
      }
      let tmp = this.findMin(node.right);
      node.val = tmp.val;
      node.right = this.removeUtil(node.right, tmp.val);
    }
    if (node == null) return node;
    this.update(node);
    return this.rebalanceAfterDeletion(node, item);
  }
  rebalanceAfterInsert(node, item) {
    let bal = this.getBalance(node);
    if (bal > 1 && this.cmp(item, node.left) < 0) return this.RR(node);
    if (bal < -1 && this.cmp(item, node.right) > 0) return this.LR(node);
    if (bal > 1 && this.cmp(item, node.left) > 0) {
      node.left = this.LR(node.left);
      return this.RR(node);
    }
    if (bal < -1 && this.cmp(item, node.right) < 0) {
      node.right = this.RR(node.right);
      return this.LR(node);
    }
    return node;
  }
  rebalanceAfterDeletion(node) {
    let bal = this.getBalance(node);
    if (bal > 1 && this.getBalance(node.left) >= 0) return this.RR(node);
    if (bal < -1 && this.getBalance(node.right) <= 0) return this.LR(node);
    if (bal > 1 && this.getBalance(node.left) < 0) {
      node.left = this.LR(node.left);
      return this.RR(node);
    }
    if (bal < -1 && this.getBalance(node.right) > 0) {
      node.right = this.RR(node.right);
      return this.LR(node);
    }
    return node;
  }
  find(item) {
    return this.findFirstOf(item);
  }
  findFirstOf(item) {
    let node = this.root,
      res = null;
    while (node != null) {
      if (this.cmp(item, node) < 0) {
        node = node.left;
      } else if (this.cmp(item, node) > 0) {
        node = node.right;
      } else {
        res = node;
        node = node.left;
      }
    }
    return res;
  }
  higher(item) {
    // > upper_bound
    let node = this.findSuccessorOf(item);
    return node == null ? null : node.val;
  }
  findSuccessorOf(item) {
    let node = this.root,
      res = null;
    while (node != null) {
      if (this.cmp(item, node) < 0) {
        res = node;
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return res;
  }
  lower(item) {
    // <
    let node = this.findPrecursorOf(item);
    return node == null ? null : node.val;
  }
  findPrecursorOf(item) {
    let node = this.root,
      res = null;
    while (node != null) {
      if (this.cmp(item, node) > 0) {
        res = node;
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return res;
  }
  findKth(k) {
    // (1-indexed)  unique
    let res = this.findKthNode(k);
    return res == null ? null : res.val;
  }
  findKthNode(k) {
    return this.size() < k ? null : this.KthUtil(this.root, k);
  }
  KthUtil(node, k) {
    let leftCount = node.left ? node.left.SubTreeNodes : 0;
    if (leftCount + 1 === k) return node;
    if (leftCount + 1 < k) return this.KthUtil(node.right, k - leftCount - 1);
    return this.KthUtil(node.left, k);
  }
  rankOf(item) {
    // unique value treeset    total elements in tree with val < item
    let x = this.findPrecursorOf(item);
    return x == null ? 0 : this.findRankOf(x, this.root) + 1;
  }
  findRankOf(item, node) {
    let rank = 0;
    while (node != null) {
      let leftSubtreeNodes = node.left != null ? node.left.SubTreeNodes : 0;
      if (this.cmp(item, node) < 0) {
        node = node.left;
      } else if (this.cmp(item, node) > 0) {
        rank += leftSubtreeNodes + 1;
        node = node.right;
      } else {
        return rank + leftSubtreeNodes;
      }
    }
    return 0;
  }
  has(item) {
    return this.count(item) > 0;
  }
  count(item) {
    let node = this.find(item);
    return node == null ? 0 : node.cnt;
  }
  maxx() {
    let node = this.findMax(this.root);
    return node == null ? null : node.val;
  }
  minx() {
    let node = this.findMin(this.root);
    return node == null ? null : node.val;
  }
  findMin(node) {
    return node == null || node.left == null ? node : this.findMin(node.left);
  }
  findMax(node) {
    return node == null || node.right == null ? node : this.findMax(node.right);
  }
  size() {
    return this.nodeCount;
  }
  total() {
    return this.tot;
  }
  isEmpty() {
    return this.root == null;
  }
  show() {
    // inorder
    let res = [];
    const dfs = (x) => {
      if (x == null) return;
      dfs(x.left);
      res.push(x.val);
      dfs(x.right);
    };
    dfs(this.root);
    return res;
  }
  showAll() {
    let d = this.show(),
      res = [];
    for (const x of d) {
      for (let i = 0; i < this.count(x); i++) res.push(x);
    }
    return res;
  }
}

function SORTracker() {
  let tree = new AVLTree(),
    i = 1;
  return { add, get };
  function add(name, score) {
    tree.insert([name, score]);
  }
  function get() {
    let node = tree.findKthNode(i++);
    return node.val[0];
  }
}

/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */

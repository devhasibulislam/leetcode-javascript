/**
 * Title: Create Sorted Array through Instructions
 * Description: Given an integer array instructions, you are asked to create a sorted array from the elements in instructions. You start with an empty container nums. For each element from left to right in instructions, insert it into nums.
 * Author: Hasibul Islam
 * Date: 10/04/2023
 */

/**
 * @param {number[]} instructions
 * @return {number}
 */
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function Node(val) {
  this.val = val === undefined ? 0 : val;
  this.left = undefined;
  this.right = undefined;

  // size of the subtree rooted by this node
  this.subtreeSize = 0;

  // num of nodes with same value
  this.valCount = 0;
}

const buildBST = (vals, first, last) => {
  if (first > last) {
    return undefined;
  }
  const mid = Math.floor((first + last) / 2);
  const root = new Node(vals[mid]);
  root.left = buildBST(vals, first, mid - 1);
  root.right = buildBST(vals, mid + 1, last);
  return root;
};

const markAdded = (root, val) => {
  while (root) {
    // val is added on or below curr root, so increase subtreeSize by 1
    root.subtreeSize++;
    if (val < root.val) {
      root = root.left;
    } else if (val > root.val) {
      root = root.right;
    } else {
      // get to the node with same val, so update valCount
      root.valCount++;
      // break because val is added here, no need to traverse anymore
      break;
    }
  }
};

const createSortedArray = (values) => {
  // get unique sorted values (all possible values)
  const sortedVals = [...new Set(values)].sort((a, b) => a - b);

  // build bst recursively and return its root
  const root = buildBST(sortedVals, 0, sortedVals.length - 1);
  let cost = 0;

  for (const val of values) {
    // update the bst by marking current val added
    markAdded(root, val);

    // go from root and calucate num of nodes with less vals and num of nodes with greater vals
    let curr = root;
    let numLess = 0;
    let numGreater = 0;

    while (true) {
      if (val < curr.val) {
        numGreater += curr.valCount + (curr.right ? curr.right.subtreeSize : 0);
        curr = curr.left;
      } else if (val > curr.val) {
        numLess += curr.valCount + (curr.left ? curr.left.subtreeSize : 0);
        curr = curr.right;
      } else {
        numGreater += curr.right ? curr.right.subtreeSize : 0;
        numLess += curr.left ? curr.left.subtreeSize : 0;
        break;
      }
    }
    cost += Math.min(numLess, numGreater);
  }

  return cost % (Math.pow(10, 9) + 7);
};

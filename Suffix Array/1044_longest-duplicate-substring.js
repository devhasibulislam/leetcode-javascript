/**
 * Title: Longest Duplicate Substring
 * Description: Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap. Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".
 * Author: Hasibul Islam
 * Date: 01/04/2023
 */

/**
 * @param {string} s
 * @return {string}
 */
// npm i @yiminghe/suffix-tree
// @yiminghe/suffix-tree
var suffixTree = (function () {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var id = 0;
  var STNode =
    /*#__PURE__*/
    (function () {
      function STNode(tree, start, end) {
        _defineProperty(this, "start", void 0);

        _defineProperty(this, "end", void 0);

        _defineProperty(this, "next", void 0);

        _defineProperty(this, "tree", void 0);

        _defineProperty(this, "link", void 0);

        _defineProperty(this, "id", void 0);

        _defineProperty(this, "parent", void 0);

        _defineProperty(this, "allEdgesLength", void 0);

        this.start = start === undefined ? tree.position : start;
        this.end = end;
        this.next = Object.create(null);
        this.tree = tree; // this.link = undefined;
        // this.parent = undefined;

        this.id = ++id;
        this.allEdgesLength = 0;
      }

      var _proto = STNode.prototype;

      _proto.getEdgeLength = function getEdgeLength() {
        return this.start === -1 ? 0 : this.getEnd() - this.start;
      };

      _proto.getEnd = function getEnd() {
        return this.end === undefined ? this.tree.position + 1 : this.end;
      };

      _proto.getEdgeString = function getEdgeString() {
        return this.tree.s.slice(this.start, this.start + this.getEdgeLength());
      };

      _proto.addChild = function addChild(c, node) {
        this.next[c] = node;
        node.parent = this;
      };

      return STNode;
    })();

  var SuffixTee =
    /*#__PURE__*/
    (function () {
      function SuffixTee(str) {
        _defineProperty(this, "s", void 0);

        _defineProperty(this, "root", void 0);

        _defineProperty(this, "position", void 0);

        _defineProperty(this, "linkNode", void 0);

        _defineProperty(this, "remainder", void 0);

        _defineProperty(this, "activeNode", void 0);

        _defineProperty(this, "activeLength", void 0);

        _defineProperty(this, "activeEdge", void 0);

        _defineProperty(this, "longestDupSubstrLength", void 0);

        _defineProperty(this, "longestDupSubstrEnd", void 0);

        this.s = str;
        this.position = -1;
        this.linkNode = undefined;
        this.remainder = 0;
        this.activeLength = 0;
        this.activeEdge = 0;
        this.longestDupSubstrEnd = -1;
        this.longestDupSubstrLength = -1;
        this.activeNode = this.root = new STNode(this);

        for (
          var _iterator = str,
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
          ;

        ) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var c = _ref;
          this.addChar(c);
        }
      }

      var _proto2 = SuffixTee.prototype;

      _proto2.addSuffixLink = function addSuffixLink(node) {
        if (this.linkNode) {
          this.linkNode.link = node;
        }

        this.linkNode = node;
      };

      _proto2.getActiveEdge = function getActiveEdge() {
        return this.s[this.activeEdge];
      };

      _proto2.walkDown = function walkDown(nextNode) {
        var activeLength = this.activeLength;
        var nextEdgeLength = nextNode.getEdgeLength();

        if (activeLength >= nextEdgeLength) {
          this.activeEdge += nextEdgeLength;
          this.activeLength -= nextEdgeLength;
          this.activeNode = nextNode;
          return true;
        }

        return false;
      };

      _proto2.addChar = function addChar(c) {
        ++this.position;
        this.linkNode = undefined;
        this.remainder++;

        while (this.remainder > 0) {
          if (this.activeLength == 0) {
            this.activeEdge = this.position;
          }

          var activeC = this.getActiveEdge();

          if (!this.activeNode.next[activeC]) {
            var leaf = new STNode(this);
            this.activeNode.addChild(activeC, leaf);
            this.addSuffixLink(this.activeNode); //rule 2
          } else {
            var nextNode = this.activeNode.next[activeC];

            if (this.walkDown(nextNode)) {
              continue; //observation 2
            }

            if (this.s[nextNode.start + this.activeLength] === c) {
              //observation 1
              this.activeLength++;
              this.addSuffixLink(this.activeNode); // observation 3

              break;
            }

            var split = new STNode(
              this,
              nextNode.start,
              nextNode.start + this.activeLength
            );
            this.activeNode.addChild(activeC, split);

            var _leaf = new STNode(this);

            split.addChild(c, _leaf);
            split.allEdgesLength +=
              this.activeNode.allEdgesLength + split.getEdgeLength();

            if (split.allEdgesLength > this.longestDupSubstrLength) {
              this.longestDupSubstrLength = split.allEdgesLength;
              this.longestDupSubstrEnd = split.getEnd();
            }

            nextNode.start += this.activeLength;
            split.addChild(this.s[nextNode.start], nextNode);
            this.addSuffixLink(split); //rule 2
          }

          this.remainder--;

          if (this.activeNode == this.root && this.activeLength > 0) {
            //rule 1
            this.activeLength--;
            this.activeEdge = this.position - this.remainder + 1;
          } else {
            this.activeNode = this.activeNode.link
              ? this.activeNode.link
              : this.root; //rule 3
          }
        }
      };

      _proto2.getLongestDupSubstr = function getLongestDupSubstr() {
        return this.longestDupSubstrLength === -1
          ? ""
          : this.s.slice(
              this.longestDupSubstrEnd - this.longestDupSubstrLength,
              this.longestDupSubstrEnd
            );
      };
      return SuffixTee;
    })();

  return SuffixTee;
})();

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (s) {
  s += "$";
  let st = new suffixTree(s);
  return st.getLongestDupSubstr();
};

console.log(longestDupSubstring("abcabcbb"));

/**
 * Title: Valid Parentheses
 * Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(isValid("()"));

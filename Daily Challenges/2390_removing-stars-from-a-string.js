/**
 * Title: Removing Stars from a String
 * Description: You are given a string s, which contains stars *.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  const stack = [];
  for (let ch of s) ch == "*" ? stack.pop() : stack.push(ch);
  return stack.join("");
};

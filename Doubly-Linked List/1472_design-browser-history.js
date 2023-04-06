/**
 * Title: Design Browser History
 * Description: You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.backHistory = [];
  this.forwardHistory = [];
  this.current = homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.backHistory.push(this.current);
  this.current = url;
  this.forwardHistory = [];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (!this.backHistory.length) return this.current;

  while (steps > 0 && this.backHistory.length) {
    this.forwardHistory.push(this.current);
    this.current = this.backHistory.pop();
    steps--;
  }

  return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (!this.forwardHistory.length) return this.current;

  while (steps > 0 && this.forwardHistory.length) {
    this.backHistory.push(this.current);
    this.current = this.forwardHistory.pop();
    steps--;
  }

  return this.current;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

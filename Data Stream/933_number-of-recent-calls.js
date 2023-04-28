/**
 * Title: Number of Recent Calls
 * Description: You have a RecentCounter class which counts the number of recent requests within a certain time frame.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

var RecentCounter = function () {
  this.stream = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.stream.push(t); // Everytime we recieve a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
  while (this.stream[0] < t - 3000) {
    this.stream.shift();
  }
  // When the loop ends the length of calls will be the length of the array
  return this.stream.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * Title: Implement Rand10() Using Rand7()
 * Description: Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  while (true) {
    const row = rand7();
    const col = rand7();
    const idx = col + (row - 1) * 7;
    if (idx <= 40) {
      return 1 + ((idx - 1) % 10);
    }
  }
};

console.log(rand10());

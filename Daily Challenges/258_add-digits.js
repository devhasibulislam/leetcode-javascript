/**
 * Title: Add Digits
 * Description: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * Author: Hasibul Islam
 * Date: 26/04/2023
 */

/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  num = num.toString();
  let newNumber = 0;
  for (let i = 0; i < num.length; i++) {
    newNumber += Number(num[i]);
  }
  if (newNumber.toString().length === 1) return newNumber;
  return addDigits(newNumber);
};

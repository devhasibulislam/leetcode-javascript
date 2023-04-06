/**
 * Title: Design a Text Editor
 * Description: Design a text editor with a cursor that can do the following: Add text to where the cursor is. Delete text from where the cursor is (simulating the backspace key). Move the cursor either left or right.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

var TextEditor = function () {
  this.leftText = "";
  this.rightText = "";
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  this.leftText += text;
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  if (k > this.leftText.length) k = this.leftText.length;
  this.leftText = this.leftText.substr(0, this.leftText.length - k);
  return k;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  if (this.leftText.length < k) k = this.leftText.length;
  let temp = this.leftText.substr(this.leftText.length - k);
  this.leftText = this.leftText.substr(0, this.leftText.length - k);
  this.rightText = temp + this.rightText;
  return this.leftText.substr(
    this.leftText.length - Math.min(this.leftText.length, 10)
  );
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  if (this.rightText.length < k) k = this.rightText.length;
  let temp = this.rightText.substr(0, k);
  this.rightText = this.rightText.substr(k);
  this.leftText = this.leftText + temp;
  return this.leftText.substr(
    this.leftText.length - Math.min(this.leftText.length, 10)
  );
};

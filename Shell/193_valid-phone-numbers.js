/**
 * Title: Valid Phone Numbers
 * Description: Read from the file 193.txt and output all valid phone numbers to stdout.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

const fs = require("fs");

const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/;

fs.readFile("193.txt", "utf-8", (err, data) => {
  if (err) throw err;

  const phoneNumbers = data
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => phoneRegex.test(line));

  console.log(phoneNumbers);
});

/**
 * Title: Tenth Line
 * Description: Read from the file 195.txt and output the tenth line to stdout.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

const fs = require("fs");

fs.readFile("195.txt", "utf-8", (err, data) => {
  if (err) throw err;

  // Split the data into lines
  const lines = data.trim().split("\n");

  // Output the tenth line, or "undefined" if the file has fewer than ten lines
  console.log(lines[9]);
});

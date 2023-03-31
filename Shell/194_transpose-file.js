/**
 * Title: Transpose File
 * Description: Read from the file 194.txt and print its transposed content to stdout.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

const fs = require("fs");

fs.readFile("194.txt", "utf-8", (err, data) => {
  if (err) throw err;

  // Split the data into lines
  const lines = data.trim().split("\n");
  console.log(lines);

  // Use map() to split each line into words
  const words = lines.map((line) => line.trim().split(" "));
  console.log(words);

  // Transpose the array of words
  const transposed = words[0].map((_, i) => words.map((row) => row[i]));
  console.log(transposed);

  // Print the transposed content
  transposed.forEach((row) => console.log(row.join(" ")));
});

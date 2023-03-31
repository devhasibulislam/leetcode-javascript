/**
 * Title: Word Frequency
 * Description: Read from the file 192.txt and output the word frequency list to stdout.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

const fs = require("fs");

fs.readFile("192.txt", "utf-8", (err, data) => {
  if (err) throw err;

  // Split the data into words
  const words = data.trim().split(/\s+/);

  // Create an object to store the word frequency counts
  const wordCounts = {};

  // Count the frequency of each word
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  // Print the word frequency list to stdout
  Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, count]) => console.log(`${word} ${count}`));
});

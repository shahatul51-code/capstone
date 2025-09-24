// Import the natural npm package
const natural = require("natural");

// Example usage: simple tokenization
const tokenizer = new natural.WordTokenizer();
const text = "I love using Node.js and NLP libraries!";
const tokens = tokenizer.tokenize(text);

console.log("Tokens:", tokens);

// Export any functions if needed
module.exports = {
  tokenizer
};

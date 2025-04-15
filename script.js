const quotes = [
  "Discipline equals freedom. – Jocko Willink",
  "The best way out is always through. – Robert Frost",
  "Success is the product of daily habits. – James Clear",
  "What you do every day matters more than what you do once in a while. – Gretchen Rubin",
  "Stay committed even when you don't feel like it. – Marcus’s Mission",
  "Everybody is going to be who they are until they want to be someone else. – Marcus Piper",
  "Be who you are going to be! – Marcus Piper",
  "Do what you're going to do! – Marcus Piper"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
quotes.forEach(function(quote, index) {
  console.log(index + 1 + ". " + quote);
});
const hypedQuotes = quotes.map(function(q) {
  return "🔥 " + q;
});

console.log(hypedQuotes);
const totalChars = quotes.reduce(function(total, q) {
  return total + q.length;
}, 0);

console.log("Total characters in all quotes:", totalChars);
// Replace the 3rd quote with a new one
quotes.splice(2, 1, "Success is a system, not a moment. – Marcus Piper");
const sortedQuotes = [...quotes].sort(); // copy first to avoid changing original

console.log(sortedQuotes);

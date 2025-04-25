// 1) Full quotes array
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

// 2) DOM references
const quoteEl = document.getElementById('quote');
const newBtn = document.getElementById('new-quote');
const saveBtn = document.getElementById('save-quote');
const listEl = document.getElementById('saved-quotes');

let currentQuote = '';

// 3) Display a random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteEl.textContent = currentQuote; // Update the displayed quote
}

// 4) Load and render saved favorites from localStorage
const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
stored.forEach(quote => {
  const li = document.createElement('li');
  li.textContent = quote;
  listEl.appendChild(li); // Add saved quotes to the list
});

// 5) Handle “Show New Quote” button
newBtn.addEventListener('click', showQuote);

// 6) Handle “Save This Quote” button
saveBtn.addEventListener('click', () => {
  if (!currentQuote) return; // Prevent saving if no quote is displayed

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favorites.includes(currentQuote)) {
    favorites.push(currentQuote);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Create and append the new saved quote to the list
    const li = document.createElement('li');
    li.textContent = currentQuote;
    listEl.appendChild(li);
  }
});

// 7) Show an initial quote on page load
showQuote();
// 8) Handle "Reset Saved Quotes" button
const resetBtn = document.getElementById('reset-quotes');

resetBtn.addEventListener('click', () => {
  // Clear localStorage
  localStorage.removeItem('favorites');

  // Clear the DOM list
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }

  // Optional: Log to the console or show a message
  console.log('All saved quotes have been reset.');
});
const quotes = [
    "Discipline equals freedom. – Jocko Willink",
    "The best way out is always through. – Robert Frost",
    "Success is the product of daily habits. – James Clear",
    "What you do every day matters more than what you do once in a while. – Gretchen Rubin",
    "Stay committed even when you don't feel like it. – Marcus’s Mission"
  ];
  
  function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  
const quotes = [
  {
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80&auto=format&fit=crop",
    alt: "Pancakes with syrup",
    text: "There is no sincerer love than the love of food.",
    author: "George Bernard Shaw",
    theme: "theme-pancake"
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop",
    alt: "Burger with fries",
    text: "Life is uncertain. Eat dessert first.",
    author: "Ernestine Ulmer",
    theme: "theme-burger"
  },
  {
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop",
    alt: "Cup of coffee",
    text: "Coffee is a hug in a mug.",
    author: "Unknown",
    theme: "theme-coffee"
  }
];

const imgEl = document.getElementById("quote-image");
const textEl = document.getElementById("quote-text");
const authorEl = document.getElementById("quote-author");
const newBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share-quote");
const autoRotate = document.getElementById("auto-rotate");
const cardEl = document.querySelector(".quote-card");

function showRandomQuote() {
  const chosen = quotes[Math.floor(Math.random() * quotes.length)];
  
  imgEl.src = chosen.img;
  imgEl.alt = chosen.alt;
  textEl.textContent = `"${chosen.text}"`;
  authorEl.textContent = `— ${chosen.author}`;

  // Remove old theme classes
  cardEl.className = "quote-card";
  // Add new theme
  cardEl.classList.add(chosen.theme);
}

let rotateInterval = setInterval(showRandomQuote, 15000);

newBtn.addEventListener("click", showRandomQuote);

shareBtn.addEventListener("click", () => {
  const quote = `${textEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(quote).then(() => {
    alert("Quote copied to clipboard!");
  });
});

autoRotate.addEventListener("change", () => {
  if (autoRotate.checked) {
    rotateInterval = setInterval(showRandomQuote, 15000);
  } else {
    clearInterval(rotateInterval);
  }
});

// Initial load
showRandomQuote();

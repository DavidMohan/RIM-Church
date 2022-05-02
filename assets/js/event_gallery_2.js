/**
  Code Creator: https://github.com/duongductrong
  Source Design: Internet
*/

// Selector card items
const selectorItems = callback => document.querySelectorAll(".flexible-cards > .flexible-cards__item").forEach(callback);

// Handle display or not
selectorItems(cardItem => {
  // Listen event "click" of user to on "card items"
  cardItem.addEventListener("click", () => {
    // Invisible display of all items
    selectorItems(_cardItem => _cardItem.classList.remove("active"));
    // Only visible current item was clicked
    cardItem.classList.add("active");
  });
});
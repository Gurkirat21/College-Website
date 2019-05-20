const cards = document.querySelectorAll(".card");
function toggleOpen() {
  this.classList.toggle("open");
  for (i = 0; i < cards.length; i++) {
    if (cards[i] !== this) cards[i].classList.toggle("close");
  }
}
cards.forEach(card => card.addEventListener("click", toggleOpen));

let card = document.querySelectorAll(".card");
for (cards of card) {
  cards.addEventListener("mouseover", function (event) {
    if (event.target.id === "spaghetti") {
      event.target.setAttribute("src", "images/spagheti-disc.jpeg");
      return;
    } else if (event.target.id === "pizza") {
      event.target.setAttribute("src", "images/pizza-disc.jpeg");
      return;
    } else if (event.target.id === "croffle") {
      event.target.setAttribute("src", "images/croffle-disc.jpeg");
      return;
    }
  });

  cards.addEventListener("mouseout", function (event) {
    if (event.target.id === "spaghetti") {
      event.target.setAttribute("src", "images/home-img-1.png");
      return;
    }
    if (event.target.id === "pizza") {
      event.target.setAttribute("src", "images/menu-1.jpg");
      return;
    }
    if (event.target.id === "croffle") {
      event.target.setAttribute("src", "images/menu-4.jpg");
      return;
    }
  });
}

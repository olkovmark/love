import { openCard } from "./card.js";

const cardConteiner = document.querySelector(".card_conteiner");
const hearths = document.querySelector(".hearths");

function openHeart() {
  cardConteiner.style.width = "100%";

  openCard();
}

setInterval(() => {
  createHearth();
}, 300);

async function createHearth() {
  const span = document.createElement("span");
  span.addEventListener("click", openHeart);
  span.classList = "hearth";
  span.style.animationDuration = 4 + Math.random() * 4 + "s";
  span.style.left = Math.random() * 100 + "%";
  span.style.top = 110 + "%";
  hearths.appendChild(span);
  span.addEventListener("animationend", () => {
    span.remove();
  });
}

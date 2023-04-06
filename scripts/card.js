import { model } from "./model.js";

export function openCard() {
  const contant = document.querySelector(".card_conteiner");

  const card = model[Math.floor(Math.random() * model.length)];

  const section = document.createElement("section");
  const titleContainer = document.createElement("h3");
  const discContainer = document.createElement("p");

  titleContainer.textContent = card.title;
  discContainer.textContent = card.disk;

  section.classList = "card";

  section.style.backgroundImage = "url(../foto/" + card.img + ")";
  titleContainer.classList = "card_title";
  discContainer.classList = "card_disc";

  section.onclick = () => {
    titleContainer.remove();
    discContainer.remove();
    closeCardAnimation(section, () => {
      section.remove();
      contant.style.width = 0;
    });
  };

  contant.appendChild(section);

  section.style.setProperty("--w", 0 / 100 + "px");

  setTimeout(() => {
    openCardAnimation(section, () => {
      section.appendChild(titleContainer);
      section.appendChild(discContainer);
    });
  }, 1);
}

function openCardAnimation(section, callback) {
  section.style.setProperty("--w", 1 + "px");
  section.addEventListener("transitionend", callback);
}
function closeCardAnimation(section, callback) {
  section.style.setProperty("--w", 0 + "px");
  section.addEventListener("transitionend", callback);
}

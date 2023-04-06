import { model } from "./model.js";

export function openCard() {
  const contant = document.querySelector(".card_conteiner");

  const card = model[Math.floor(Math.random() * 2)];

  const section = document.createElement("section");
  const titleContainer = document.createElement("h3");
  const discContainer = document.createElement("p");

  titleContainer.textContent = card.title;
  discContainer.textContent = card.disk;

  section.classList = "card";

  section.style.setProperty("--url", `url(./foto/${card.img})`);
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

  openCardAnimation(section, () => {
    section.appendChild(titleContainer);
    section.appendChild(discContainer);
  });
}

function openCardAnimation(elem, callback) {
  let size = 0;
  const id = setInterval(frame, 1);
  function frame() {
    if (size >= 100) {
      clearInterval(id);
      callback();
    } else {
      size++;
      elem.style.setProperty("--w", size / 100 + "px");
    }
  }
}
function closeCardAnimation(elem, callback) {
  let size = 100;
  const id = setInterval(frame, 1);
  function frame() {
    if (size <= 0) {
      clearInterval(id);
      callback();
    } else {
      size--;
      elem.style.setProperty("--w", size / 100 + "px");
    }
  }
}

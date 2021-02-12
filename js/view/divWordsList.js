import { getListofWords, eraseCard } from "../controller/WordController.js";

const divCards = document.querySelector('[data-body="cards"]');

showCards();
export async function showCards() {
  const wordList = await getListofWords();
  let card = "";
  let cardsArray = [];
  let cardsHtml = "";

  for (let word of wordList) {
    card = `
            <div class="cards__single-card fadein">
                <button  class="cards__btn--delete">
                  <img data-id="${word.id}" class="cards__btn--delete-img" src="../img/icon-trash.png" alt="deletar">
                </button>
                <div class="cards__single-card--FRtxt">
                  <p class="cards__single-card--txt">
                    <span class="cards__single-card--small">FR</span>
                    <span>${word.wordFR}</span>
                  </p>
                </div>
                <div class="cards__single-card--PTtxt">
                  <p class="cards__single-card--txt">
                    <span class="cards__single-card--small">PT</span>
                    <span>${word.wordPT}</span
                  </p>
                </div>
            </div>
        `;
    cardsArray.push(card);
  }
  cardsArray
    .slice(0)
    .reverse()
    .map((item) => (cardsHtml += item));

  divCards.innerHTML = cardsHtml;
  let deleteBtns = document.querySelectorAll("[data-id]");
  let arrayOfBtns = Array.from(deleteBtns);
  arrayOfBtns.map((btn) => btn.addEventListener("click", deleteCard));
}

export async function deleteCard(event) {
  let id = event.target.dataset.id;
  if (confirm("Quer mesmo deletar palavra?")) {
    await eraseCard(id);
    await showCards();
  }
}

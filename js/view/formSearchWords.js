import * as WordController from "../controller/WordController.js";
import { deleteCard } from "./divWordsList.js";

const btnSearch = document.querySelector("#btn-search");
const inputSearch = document.querySelector("#input-search");

btnSearch.addEventListener("click", async function () {
  try {
    let searchedWord = {
      search: inputSearch.value,
    };

    let searchResult = await WordController.searchWord(searchedWord);
    showSearch(searchResult.data);
    inputSearch.value = "";
  } catch (erro) {
    alert(
      "Um erro inesperado ocorreu ao buscar. Por favor, contate o administrador!"
    );
  }
});

const divCards = document.querySelector('[data-body="cards"]');

export async function showSearch(searchResult) {
  let card = "";

  for (let result of searchResult) {
    card += `
            <div class="cards__single-card fadein">
                <button  class="cards__btn--delete">
                  <img data-id="${result.id}" class="cards__btn--delete-img" src="../img/icon-trash.png" alt="deletar">
                </button>
                <div class="cards__single-card--FRtxt">
                  <p class="cards__single-card--txt">
                    <span class="cards__single-card--small">FR</span>
                    <span>${result.wordFR}</span>
                  </p>
                </div>
                <div class="cards__single-card--PTtxt">
                  <p class="cards__single-card--txt">
                    <span class="cards__single-card--small">PT</span>
                    <span>${result.wordPT}</span
                  </p>
                </div>
            </div>
        `;
  }
  divCards.innerHTML = card;
  let deleteBtns = document.querySelectorAll("[data-id]");
  let arrayOfBtns = Array.from(deleteBtns);
  arrayOfBtns.map((btn) => btn.addEventListener("click", deleteCard));
}

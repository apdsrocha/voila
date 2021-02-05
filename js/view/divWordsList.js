
import { getListofWords } from "../controller/WordController.js"

const divCards = document.querySelector('[data-body="cards"]');
console.log(divCards)
showCards();
export async function showCards()
{
    const wordList = await getListofWords();
    let card = '';

    for (let word of wordList)
    {
      card += `
            <div class="cards__single-card">
                <span data-id="${word.id}">DEL</span>
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
    }
    divCards.innerHTML = card;
}
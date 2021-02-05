import { getListofWords } from "../controller/WordController.js";

export default class Word {
    constructor(id = 0, wordFR = '', wordPT = '') {
        this.id = getProdutoId();
        this.wordFR = wordFR;
        this.wordPT = wordPT;
    }
}

function getProdutoId()
{
    let wordList = getListofWords();
    return wordList.length;
}
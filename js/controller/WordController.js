import Word from "../model/Word.js";
import { getWords, saveWord } from "../services/WordsService.js";

export async function getListofWords()
{
    const wordsInServer = await getWords();
    return wordsInServer
}

export async function sendWord(formProduto)
{
    const word = new Word();
    word.wordPT = formProduto.wordPT;
    word.wordFR = formProduto.wordFR;
    let id = await getListofWords();
    word.id =  id.length;
   const status = await saveWord(word);
   return status;
}
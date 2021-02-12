import Word from "../model/Word.js";
import { getWords, saveWord, deleteWord, retrieveWord } from "../services/WordsService.js";

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

    let allWords = await getListofWords();

    if(!!allWords.length) {
        let ids = allWords.map(item => item.id);
        let sortedIds = ids.sort((a, b) => a - b);
        let greatestNumber = sortedIds[sortedIds.length -1];
        word.id =  greatestNumber + 1;
    } else {
        word.id =  id.length;
    }

   const status = await saveWord(word);
   return status;
}

export async function eraseCard(id)
{
    const wordsInServer = await deleteWord(id);
    return wordsInServer
}


export async function searchWord(formSearch)
{
    const wordSearch = await retrieveWord(formSearch);
    return wordSearch
}

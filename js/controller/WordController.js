import { getWords } from "../services/WordsService.js";

export async function getListofWords()
{
    const wordsInServer = await getWords();
    return wordsInServer;
}

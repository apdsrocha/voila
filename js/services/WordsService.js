const URL_BASE = 'http://localhost:5000/api/';

export async function getWords()
{
    const resposta = await fetch(URL_BASE);

    const wordList = await resposta.json();
    console.log(wordList.data)
    return wordList.data;
}

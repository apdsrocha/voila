const URL_BASE = 'http://localhost:5000/api/';

export async function getWords()
{
    const resposta = await fetch(URL_BASE);
    const wordList = await resposta.json();
    return wordList.data;
}

export async function saveWord(newWord)
{
    const answer = await fetch(URL_BASE, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
      });
    const statusServer= await answer.json();
    
    return statusServer;
}
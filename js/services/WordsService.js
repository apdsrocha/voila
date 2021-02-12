const URL_BASE = "http://localhost:5000/api/";

export async function getWords() {
  const resposta = await fetch(URL_BASE);
  const wordList = await resposta.json();
  return wordList.data;
}

export async function saveWord(newWord) {
  const answer = await fetch(URL_BASE, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWord),
  });
  const statusServer = await answer.json();

  return statusServer;
}

export async function deleteWord(id) {
  const parameters = new URLSearchParams();
  parameters.append("id", id);

  const resposta = await fetch(URL_BASE + parameters, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const statusServer = await resposta.json();
  return statusServer;
}

export async function retrieveWord(searchedTerm) {
  console.log(searchedTerm.search);
  const parameters = new URLSearchParams();
  parameters.append("search", searchedTerm.search);

  const resposta = await fetch(URL_BASE + "/search/" + "?" + parameters, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const statusServer = await resposta.json();
  return statusServer;
}

import * as WordController from '../controller/WordController.js';
import { showCards } from './divWordsList.js';

const btnSave = document.querySelector('#btn-save');
const inputFR = document.querySelector('#input-wordFR');
const inputBR = document.querySelector('#input-wordBR');

btnSave.addEventListener('click', async function() {
  try 
  {
    let formAnswers = {
      wordFR : inputFR.value,
      wordPT : inputBR.value
    }    
      await WordController.sendWord(formAnswers);
      await showCards();
      inputFR.value = '';
      inputBR.value = '';
  }
  catch(erro) 
  { 
    alert('Um erro inesperado ocorreu ao adicionar um produto ao seu pedido. Por favor, contate o administrador!');
  }
});
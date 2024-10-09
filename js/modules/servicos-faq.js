export default function initServicosFaq(){

}

const dtPergunta = document.querySelectorAll('[data-servicos="pergunta"]');
dtPergunta[0].classList.add('ativo');
dtPergunta[0].nextElementSibling.classList.add('ativo');
function mostrarResposta(){
  this.classList.add('ativo');
  this.nextElementSibling.classList.add('ativo');
}

dtPergunta.forEach((pergunta) =>{
  pergunta.addEventListener('click',mostrarResposta); 
})
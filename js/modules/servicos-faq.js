export default function initServicosFaq(){

}

const dtPergunta = document.querySelectorAll('[data-servicos="pergunta"]');
dtPergunta[0].classList.add('ativo');
dtPergunta[0].nextElementSibling.classList.add('ativo');
function mostrarResposta(){
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

dtPergunta.forEach((pergunta) =>{
  pergunta.addEventListener('click',mostrarResposta); 
})
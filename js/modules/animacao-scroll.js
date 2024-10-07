export default function initAnimacaoScroll(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-left"]');
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll(){
    scrollLeft.forEach((item) =>{
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if(itemTop < 0){
        item.classList.add('ativo');
      }
    })
  }
  animaScroll();
  
  window.addEventListener('scroll', animaScroll)
  
}


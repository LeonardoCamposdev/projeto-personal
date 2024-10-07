export  function initAnimacaoScrollLeftEspecial(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-left-especial"]');
  const teste = document.querySelectorAll('.teste');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.9;
    function animaScroll(){
      scrollLeft.forEach((item) =>{
        const itemTop = item.getBoundingClientRect().top - windowMetade;
        if(itemTop < 0){
          item.classList.add('ativo');
        }
      })

      teste.forEach((item) =>{
        const itemTop = item.getBoundingClientRect().top - windowMetade;
        if(itemTop < 0){
          item.classList.add('ativo');
        }
      })
    }
    
    window.addEventListener('scroll', animaScroll)
    
  }
}

export  function initAnimacaoScrollRightEspecial(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-right-especial"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.9;
    function animaScroll(){
      scrollLeft.forEach((item) =>{
        const itemTop = item.getBoundingClientRect().top - windowMetade;
        if(itemTop < 0){
          item.classList.add('ativo');
        }
      })
    }
    
    window.addEventListener('scroll', animaScroll)
  }
}

export  function initAnimacaoScrollUpEspecial(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-up-especial"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.9;
    function animaScroll(){
      scrollLeft.forEach((item) =>{
        const itemTop = item.getBoundingClientRect().top - windowMetade;
        if(itemTop < 0){
          item.classList.add('ativo');
        }
      })
    }
    
    window.addEventListener('scroll', animaScroll)
  }
}

export  function initAnimacaoScrollDownEspecial(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-down-especial"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.9;
    function animaScroll(){
      scrollLeft.forEach((item) =>{
        const itemTop = item.getBoundingClientRect().top - windowMetade;
        if(itemTop < 0){
          item.classList.add('ativo');
        }
      })
    }
    
    window.addEventListener('scroll', animaScroll)
  }
}


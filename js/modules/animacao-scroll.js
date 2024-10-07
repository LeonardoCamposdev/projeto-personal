export  function initAnimacaoScrollLeft(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-left"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.6;
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

export  function initAnimacaoScrollRight(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-right"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.6;
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

export  function initAnimacaoScrollUp(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-up"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.6;
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

export  function initAnimacaoScrollDown(){
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-down"]');

  if(scrollLeft.length){
    const windowMetade = window.innerHeight * 0.6;
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

//////////////////LEFT ESPECIAL
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

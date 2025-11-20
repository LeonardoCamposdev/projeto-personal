export function initAnimacaoScrollLeft() {
  const scrollLeft = document.querySelectorAll('[data-anime="scroll-left"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    scrollLeft.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if (itemTop < 0) {
        item.classList.add("ativo");
      }
    });
  }

  if (scrollLeft.length) {
    window.addEventListener("scroll", animaScroll);
  }
}

export function initAnimacaoScrollRight() {
  const scrollRight = document.querySelectorAll('[data-anime="scroll-right"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    scrollRight.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if (itemTop < 0) {
        item.classList.add("ativo");
      }
    });
  }

  if (scrollRight.length) {
    window.addEventListener("scroll", animaScroll);
  }
}

export function initAnimacaoScrollUp() {
  const scrollUp = document.querySelectorAll('[data-anime="scroll-up"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    scrollUp.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if (itemTop < 0) {
        item.classList.add("ativo");
      }
    });
  }

  if (scrollUp.length) {
    window.addEventListener("scroll", animaScroll);
  }
}

export function initAnimacaoScrollDown() {
  const scrollDown = document.querySelectorAll('[data-anime="scroll-down"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    scrollDown.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if (itemTop < 0) {
        item.classList.add("ativo");
      }
    });
  }

  if (scrollDown.length) {
    window.addEventListener("scroll", animaScroll);
  }
}

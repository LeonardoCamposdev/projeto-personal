export function initAnimacaoScrollLeftEspecial() {
  const scrollLeft = document.querySelectorAll(
    '[data-anime="scroll-left-especial"]'
  );
  const teste = document.querySelectorAll(".teste");
  const windowMetade = window.innerHeight * 0.9;

  function animaScroll() {
    scrollLeft.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top - windowMetade;
      if (itemTop < 0) {
        item.classList.add("ativo");
      }
    });

    teste.forEach((item) => {
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

export function initAnimacaoScrollRightEspecial() {
  const scrollRight = document.querySelectorAll(
    '[data-anime="scroll-right-especial"]'
  );
  const windowMetade = window.innerHeight * 0.9;

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

export function initAnimacaoScrollUpEspecial() {
  const scrollUp = document.querySelectorAll(
    '[data-anime="scroll-up-especial"]'
  );
  const windowMetade = window.innerHeight * 0.7;

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

export function initAnimacaoScrollDownEspecial() {
  const scrollDown = document.querySelectorAll(
    '[data-anime="scroll-down-especial"]'
  );
  const windowMetade = window.innerHeight * 0.9;

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

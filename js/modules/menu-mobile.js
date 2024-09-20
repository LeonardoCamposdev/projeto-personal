export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="list"');

  function handleClick() {
    menuLista.classList.add("active");
    menuBtn.classList.add("active");
  }

  menuBtn.addEventListener("click", handleClick);
}

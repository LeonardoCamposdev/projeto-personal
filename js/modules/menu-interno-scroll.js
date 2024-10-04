export default function initMenuInternoScroll() {
}


const linksInternos = document.querySelectorAll('[data-menu="list"] a');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}


linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

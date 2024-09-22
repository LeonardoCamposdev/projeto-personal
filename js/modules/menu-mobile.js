import outsideCLick from "./outsideClick.js";

export default function initMenuMobile(){
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click"];

  function openMenu(event){
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideCLick(menuList,eventos,()=>{
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    })
  }

  eventos.forEach((evento) =>{
    menuButton.addEventListener(evento,openMenu);
  })
}
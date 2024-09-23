export default function outsideClick(element,event,callback){
  const html = document.querySelector('html')
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    setTimeout(() =>{
      html.addEventListener(event, handleOutsideClick);
    })
    element.setAttribute(outside, "");
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(){
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      html.removeEventListener(event,handleOutsideClick);

      callback();
    }
  }
}
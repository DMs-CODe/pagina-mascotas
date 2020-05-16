
// Eventos para efecto Parallax
let parallax=document.querySelector('.parallax');
let title=document.querySelector('.title');

function scrollParallax(){
    let scrollTop=document.documentElement.scrollTop;
    parallax.style.transform ='translateY('+ scrollTop * -0.9 +'px)';
    // title.style.transform ='translateY('+ scrollTop * .05 +'px)';

}
window.addEventListener('scroll',scrollParallax);


// Eventos para Materiallaze CSS
document.addEventListener('DOMContentLoaded', ()=>{
  const imgBox = document.querySelectorAll('.materialBoxed')
  M.Materialbox.init(imgBox, {
      inDuration: 400,
      outDuration: 300,
  });

});
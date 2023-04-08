const navMenuEl=document.querySelector('.left-menu-icon');
const navCloseEl=document.querySelector('.nav--close');
const navList=document.querySelector('.nav--list');
const navBgOverlayEl=document.querySelector('.nav--bgOverlay');


const navOpen=() => {
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style='visibility:visible;height:100vh;width:100wh;';

}
const navClose=()=> {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style='visibility:visible;height:initial;width:100%;';


}
navMenuEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click',navClose);

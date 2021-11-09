const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');
const bodyel = document.querySelector('body');

btnBars.addEventListener('click', () => {
  mobMenu[0].style.display = 'flex';
  bodyel.style.overflow = 'hidden';
});

closeIcon[0].addEventListener('click', () => {
  mobMenu[0].style.display = 'none';
  bodyel.style.overflow = 'auto';
});

listEl.forEach((el) => {
  el.addEventListener('click', () => {
    mobMenu[0].style.display = 'none';
    bodyel.style.overflow = 'auto';
  });
});

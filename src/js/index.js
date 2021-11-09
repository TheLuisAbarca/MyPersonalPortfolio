const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');

btnBars.addEventListener('click', () => {
  mobMenu[0].style.display = 'flex';
});

closeIcon[0].addEventListener('click', () => {
  mobMenu[0].style.display = 'none';
});

listEl.forEach((el) => {
  el.addEventListener('click', () => {
    mobMenu[0].style.display = 'none';
  });
});

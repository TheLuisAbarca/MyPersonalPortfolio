let btnBars = document.getElementById("barsBtn");
let mobMenu = document.getElementsByClassName("mobMenu");
let closeIcon = document.getElementsByClassName("closeIcon");
let listEl = document.querySelectorAll(".mobMenu > ul > li");
console.log(btnBars);
console.log(mobMenu);
console.log(closeIcon);
console.log(listEl);

btnBars.addEventListener("click", function () {
  mobMenu[0].style.display = "flex";
});

closeIcon[0].addEventListener("click", function () {
  mobMenu[0].style.display = "none";
});

for (i of listEl) {
  i.addEventListener("click", function () {
    mobMenu[0].style.display = "none";
  });
}

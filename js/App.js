const burger = document.getElementById("burger");
const menu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

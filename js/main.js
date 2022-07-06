const menuButton = document.querySelector(".navbar__icons");
let check = true;
const menu = document.querySelector(".nav_links");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menu.classList.toggle("navbar__open");

  if (check) {
    menuButton.style.background = "red";
    check = false;
  } else {
    menuButton.style.background = "rgb(177, 177, 86)";
    check = true;
  }
});

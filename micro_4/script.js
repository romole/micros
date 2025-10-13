const toggleMenuElement = document.getElementById("j_menu-toggle");
const mainMenuElement = document.getElementById("j_menu-main");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("c_nav__ul--show");
  console.log("show");
});

mainMenuElement.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);

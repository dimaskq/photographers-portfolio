function stickyHeader() {
  if (window.pageYOffset > headerElement.offsetTop) {
    headerElement.classList.add("sticky");
  } else {
    headerElement.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickyHeader);
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");
  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());
  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}
burgerMenu(".burger-menu");

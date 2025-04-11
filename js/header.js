const headerHTML = `
        <div class="header__container">
            <div class="header__logo">
                <a href="./index.html"><img src="./img/icons/logo.png" alt="logo" class="logo__img"></a>
            </div>
            <div class="header__menu_item">
              <button id="language-toggle" class="language-toggle__burger">
                <span class="lang" data-lang="en">EN</span> / 
                <span class="lang" data-lang="ua">UA</span> / 
                <span class="lang" data-lang="bg">BG</span>
              </button>
              </div>
            <div class="burger-menu">
			<a href="#" class="burger-menu__button">
				<span class="burger-menu__lines"></span>
			</a>
				 
			<nav class="burger-menu__nav">
			 	<a href="./index.html" class="burger-menu__link">Home</a>
		 		<a href="./about.html" class="burger-menu__link">About</a>
		 		<a href="./gallery.html" class="burger-menu__link">Gallery</a>
			 	<a href="./contact.html" class="burger-menu__link">Contacts</a>
			</nav>
			<div class="burger-menu__overlay"></div>
 		</div>
            <nav class="header__menu">
                <ul class="header__menu_container">
                    <li class="header__menu_item"><a href="index.html" class="header__menu_link">Home</a></li>
                    <li class="header__menu_item"><a href="about.html" class="header__menu_link">About</a></li>
                    <li class="header__menu_item"><a href="gallery.html" class="header__menu_link">Gallery</a></li>
                    <li class="header__menu_item"><a href="contact.html" class="header__menu_link">Contact</a></li>
                    <li class="header__menu_item">
                      <button id="language-toggle">
                        <span class="lang" data-lang="en">EN</span> / 
                        <span class="lang" data-lang="ua">UA</span> / 
                        <span class="lang" data-lang="bg">BG</span>
                      </button>
                    </li>
                </ul>
            </nav>
        </div>
`;

const headerElement = document.getElementById("header");

headerElement.insertAdjacentHTML("afterbegin", headerHTML);

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

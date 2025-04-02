const headerHTML = `
        <div class="header__container">
            <div class="header__logo">
                <a href="./index.html"><img src="" alt="logo" class="logo__img"></a>
            </div>
            <nav class="header__menu">
                <ul class="header__menu_container">
                    <li class="header__menu_item"><a href="./index.html" class="header__menu_link">Home</a></li>
                    <li class="header__menu_item"><a href="./pages/about.html" class="header__menu_link">About</a></li>
                    <li class="header__menu_item"><a href="./pages/gallery.html" class="header__menu_link">Gallery</a></li>
                    <li class="header__menu_item"><a href="./pages/contact.html" class="header__menu_link">Contact</a></li>
                </ul>
            </nav>
        </div>
`;

const headerElement = document.getElementById('header');

headerElement.insertAdjacentHTML("afterbegin", headerHTML);


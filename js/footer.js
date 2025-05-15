const footerHTML = `<ul class="footer-links">
                <li class="leftSide__menu_item leftSide__menu_instagram"><a href="https://www.instagram.com/manuilikova_oksana?igsh=MTVwNmd5Z2dpZ2d3NA==" class="leftSide__menu_link"><span class="icon-instagram"></span>Instagram</a></li>
                <li class="leftSide__menu_item leftSide__menu_tiktok"><a href="https://www.tiktok.com/@oksana.manuilikov?_t=ZM-8t0XC9umWPO&_r=1" class="leftSide__menu_link"><span class="icon-tiktok"></span>Tik-Tok</a></li>
                <li class="leftSide__menu_item leftSide__menu_telegram"><a href="https://t.me/oksanamanuilikova" class="leftSide__menu_link"><span class="icon-telegram"></span>Telegram</a></li>
            </ul>
            <div class="footer__container">
                <div class="footer__leftSide">
                    <div class="footer__logo">
                        <div><a href="./index.html"><img src="./img/icons/logo.png" alt="logo" class="logo__img"></a></div>                     </div>
                </div>
                <div class="footer__center">
                    <h2 class="footer__latestWorks footer__title" data-i18n="home-gallery-title">Latest Photos</h2>
                    <div class="aboutMe__line footer__line"></div>
                    <div class="footer__gallery">
                        <a data-fancybox="gallery" href="./img/gallery/IMG_1528.webp">
                            <img src="./img/gallery/IMG_1528.webp" alt="gallery item" class="footer__gallery_item">
                        </a>
                        <a data-fancybox="gallery" href="./img/gallery/photo_2025-04-01_20-15-38.webp">
                            <img src="./img/gallery/photo_2025-04-01_20-15-38.webp" alt="gallery item" class="footer__gallery_item">
                        </a>
                        <a data-fancybox="gallery" href="./img/gallery/IMG_2136.webp">
                            <img src="./img/gallery/IMG_2136.webp" alt="gallery item" class="footer__gallery_item">
                        </a>
                        <a data-fancybox="gallery" href="./img/gallery/IMG_2284.webp" class = "footer__last_img">
                            <img src="./img/gallery/IMG_2284.webp" alt="gallery item" class="footer__gallery_item">
                        </a>
                    </div>
                </div>
                <div class="footer__rightSide">
                    <h2 class="footer__contacts footer__title" data-i18n="footer-contacts-title">Contacts</h2>
                    <div class="aboutMe__line footer__line"></div>
                    <div class="footer__contact">
                        <p class="footer__contacts_phone"><span>Phone:</span> +359 877869931</p>
                        <p class="footer__contacts_email"> <span>E-mail:</span> oksanamanuilikova@gmail.com</p>
                    </div>
                    <p class="copyright">Copyright © 2025 Oksana Manuilikova. All Rights Reserved.</p>
                </div>
            </div>`;

const footerHTMLElement = document.getElementById("footer");
footerHTMLElement.insertAdjacentHTML("afterbegin", footerHTML);

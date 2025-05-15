const aboutHTML = `<div class="aboutMe">
                <div class="aboutMe__container">
                    <div class="aboutMe__img_container">
                        <div class="aboutMe__img_box "  data-aos="fade-right">
                            <img src="./img/gallery/IMG_9832.webp" alt="about me img" class="aboutMe__img">
                        </div>
                    </div>
                    <div class="aboutMe__info"  data-aos="fade-left">
                        <h2 class="aboutMe__containerTitle" data-i18n="aboutme-title">About Me</h2>
                        <h1 class="aboutMe__title" data-i18n="aboutme-subtitle">My name is Oksana Manuilikova, <br>I’m a <span>Content Creator, Videographer</span></h1>
                        <div class="aboutMe__line"></div>
                        <p class="aboutMe__text" data-i18n="aboutme-text">Every project for me is more than just a shoot. I immerse myself in your story, atmosphere, and meaning to create a video that not only looks beautiful but also works.
                            I film for businesses, brands, experts, and creators who want to be seen.
                        </p>
                    </div>
                </div>
            </div>
`;

const aboutMeElement = document.getElementById("aboutMe");
aboutMeElement.insertAdjacentHTML("afterbegin", aboutHTML);

AOS.init({
  once: true,
  duration: 700,
});

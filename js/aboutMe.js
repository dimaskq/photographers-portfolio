const aboutHTML = `<div class="aboutMe">
                <div class="aboutMe__container">
                    <div class="aboutMe__img_container">
                        <div class="aboutMe__img_box "  data-aos="fade-right">
                            <img src="./img/gallery/IMG_9832.JPG" alt="about me img" class="aboutMe__img">
                        </div>
                    </div>
                    <div class="aboutMe__info"  data-aos="fade-left">
                        <h2 class="aboutMe__containerTitle">About Me</h2>
                        <h3 class="aboutMe__title">My name is Oksana Manuilikova, <br>I’m a <span>Videomaker.</span></h3>
                        <div class="aboutMe__line"></div>
                        <p class="aboutMe__text">The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. My photos are inspired by light, color, creative perspective, techniques & personalities.</p>
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

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".swiper-slide");
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const pagination = document.querySelector(".swiper-pagination");
  const nextButton = document.querySelector(".swiper-button-next");
  const prevButton = document.querySelector(".swiper-button-prev");
  let activeIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // Динамічно встановлюємо ширину для wrapper
  swiperWrapper.style.width = `${slides.length * 100}vw`;

  // Створення пагінації
  slides.forEach((_, index) => {
    const bullet = document.createElement("div");
    bullet.classList.add("swiper-pagination-bullet");
    bullet.setAttribute("data-index", index);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 50 50");

    const backgroundCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    backgroundCircle.setAttribute("cx", "25");
    backgroundCircle.setAttribute("cy", "25");
    backgroundCircle.setAttribute("r", "24");
    backgroundCircle.classList.add("background-circle");
    svg.appendChild(backgroundCircle);

    const progressCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    progressCircle.setAttribute("cx", "25");
    progressCircle.setAttribute("cy", "25");
    progressCircle.setAttribute("r", "24");
    progressCircle.classList.add("progress-circle");
    svg.appendChild(progressCircle);

    const number = document.createElement("span");
    number.textContent = index + 1;
    bullet.appendChild(svg);
    bullet.appendChild(number);

    pagination.appendChild(bullet);
  });

  const bullets = document.querySelectorAll(".swiper-pagination-bullet");

  // Функція для оновлення слайдів
  const updateSlide = () => {
    swiperWrapper.style.transform = `translateX(-${activeIndex * 100}vw)`;
    updatePagination();
    updateAnimation();
  };

  // Функція для оновлення пагінації
  const updatePagination = () => {
    bullets.forEach((bullet, index) => {
      const progressCircle = bullet.querySelector(".progress-circle");
      if (index < activeIndex) {
        bullet.classList.add("swiper-pagination-bullet-active");
        progressCircle.style.transition = "none";
        progressCircle.style.stroke = "#ff9500";
        progressCircle.style.strokeDashoffset = 0;
      } else if (index === activeIndex) {
        bullet.classList.add("swiper-pagination-bullet-active");
        progressCircle.style.transition =
          "stroke-dashoffset 4s linear, stroke 0.5s ease";
        progressCircle.style.stroke = "#ff9500";
        progressCircle.style.strokeDashoffset = 0;
      } else {
        bullet.classList.remove("swiper-pagination-bullet-active");
        progressCircle.style.transition = "none";
        progressCircle.style.stroke = "transparent";
        progressCircle.style.strokeDashoffset = 150;
      }
    });
  };

  // Функція для оновлення анімації
  const updateAnimation = () => {
    slides.forEach((slide, index) => {
      const title = slide.querySelector(".slide__title");
      const text = slide.querySelector(".slide__text");

      if (index === activeIndex) {
        if (title) title.classList.add("animate__animated", "animate__fadeIn");
        if (text) text.classList.add("animate__animated", "animate__fadeIn");
      } else {
        if (title) title.classList.remove("animate__fadeIn");
        if (text) text.classList.remove("animate__fadeIn");
      }
    });
  };

  // Обробка кліку на пагінацію
  pagination.addEventListener("click", (e) => {
    if (e.target.closest(".swiper-pagination-bullet")) {
      activeIndex = parseInt(
        e.target
          .closest(".swiper-pagination-bullet")
          .getAttribute("data-index"),
        10
      );
      updateSlide();
    }
  });

  // Кнопка "вперед"
  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % slides.length;
    updateSlide();
  });

  // Кнопка "назад"
  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Автослайд
  const autoSlide = () => {
    setTimeout(() => {
      activeIndex = (activeIndex + 1) % slides.length;
      updateSlide();
    }, 4000);
  };

  setInterval(autoSlide, 4000);

  // Ініціалізація
  updateSlide();
  updatePagination();

  // Обробка свайпів
  swiperWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  swiperWrapper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX > touchEndX + 50) {
      // Переміщаємо на наступний слайд
      activeIndex = (activeIndex + 1) % slides.length;
      updateSlide();
    } else if (touchStartX < touchEndX - 50) {
      // Переміщаємо на попередній слайд
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      updateSlide();
    }
  });
});

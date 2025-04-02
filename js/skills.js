AOS.init({
  once: true,
  duration: 700,
});

const skills = [
  {
    name: "PORTRAITS",
    percentage: 90,
    description:
      "The world without photography will be meaningless to us if there is no light.",
  },
  {
    name: "LANDSCAPES",
    percentage: 85,
    description:
      "Photography inspired by the beauty of nature and stunning views.",
  },
  {
    name: "STREET PHOTOGRAPHY",
    percentage: 95,
    description: "Capturing the soul of the city through my lens.",
  },
  {
    name: "WEDDING PHOTOGRAPHY",
    percentage: 90,
    description: "Capturing the most precious moments of your special day.",
  },
];

const skillsContainer = document.querySelector(".skills__boxes_container");

skills.forEach((skill) => {
  const circumference = 2 * Math.PI * 45; // для r = 45
  const offset = circumference - (circumference * skill.percentage) / 100;

  const skillHTML = `
        <div class="skill__box">
            <div class="skill__circle">
                <svg viewBox="0 0 100 100" class="skill__svg">
                    <circle cx="50" cy="50" r="45" class="skill__background"></circle>
                    <circle 
                        cx="50" cy="50" r="45" 
                        class="skill__progress" 
                        style="--offset: ${offset}; stroke-dashoffset: 282.6;"
                    ></circle>
                </svg>
                <div class="skill__percentage">${skill.percentage}%</div>
            </div>
            <div class="skill__information">
                <h3 class="skill__name">${skill.name}</h3>
                <p class="skill__description">${skill.description}</p>
            </div>
        </div>
    `;

  skillsContainer.insertAdjacentHTML("beforeend", skillHTML);
});

// Запуск анімації при завантаженні сторінки
document.querySelectorAll(".skill__progress").forEach((circle) => {
  const offset = circle.style.getPropertyValue("--offset");
  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 100); // Додаткова затримка для плавного старту
});

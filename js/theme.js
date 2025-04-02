const toggleButton = document.getElementById("theme-toggle");
const themeStylesheet = document.getElementById("theme-stylesheet");

// Функція для застосування теми
function applyTheme(theme) {
  if (theme === "light") {
    themeStylesheet.setAttribute("href", "css/light-style.css");
    toggleButton.textContent = "Switch to Dark Theme";
  } else {
    themeStylesheet.setAttribute("href", "css/style.css");
    toggleButton.textContent = "Switch to Light Theme";
  }
}

// Ініціалізація теми
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme"); // Отримуємо тему з localStorage

  if (savedTheme) {
    // Якщо тема збережена в localStorage, використовуємо її
    applyTheme(savedTheme);
  } else {
    // Якщо тема не збережена, визначаємо системну тему
    const systemPrefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    applyTheme(systemPrefersLight ? "light" : "dark");
  }
}

// Слухач для зміни системної теми
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";
    const savedTheme = localStorage.getItem("theme"); // Перевіряємо, чи є збережена тема

    if (!savedTheme) {
      applyTheme(newTheme); // Якщо немає збереженої теми, застосовуємо системну
    }
  });

// Зміна теми при натисканні кнопки
toggleButton.addEventListener("click", function () {
  const currentTheme =
    themeStylesheet.getAttribute("href") === "css/light-style.css"
      ? "light"
      : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme); // Зберігаємо вибір у localStorage
});

// Ініціалізація теми
initializeTheme();

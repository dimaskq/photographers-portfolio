document.addEventListener("DOMContentLoaded", function () {
  // Ініціалізація Fancybox
  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: { autoStart: true },
    Toolbar: { display: ["close"] },
    Image: { zoom: true, fit: "contain" },
  });

  // Фільтрація по класу
  const filters = document.querySelectorAll(".gallery-filter");
  const items = document.querySelectorAll(".gallery-item");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const filterType = filter.getAttribute("data-filter");

      items.forEach((item) => {
        if (filterType === "all" || item.classList.contains(filterType)) {
          item.classList.remove("hidden");
          item.setAttribute("data-fancybox", "gallery"); // Відновлюємо Fancybox
        } else {
          item.classList.add("hidden");
          item.removeAttribute("data-fancybox"); // Видаляємо, щоб Fancybox не глючив
        }
      });

      // Перезапускаємо Fancybox після фільтрації
      Fancybox.bind("[data-fancybox='gallery']");
    });
  });
});

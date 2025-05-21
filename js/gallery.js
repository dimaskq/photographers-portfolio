document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: { autoStart: true },
    Toolbar: { display: ["close"] },
    Image: { zoom: true, fit: "contain" },
  });
  const filters = document.querySelectorAll(".gallery-filter");
  const items = document.querySelectorAll(".gallery-item");
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const filterType = filter.getAttribute("data-filter");
      items.forEach((item) => {
        if (filterType === "all" || item.classList.contains(filterType)) {
          item.classList.remove("hidden");
          item.setAttribute("data-fancybox", "gallery");
        } else {
          item.classList.add("hidden");
          item.removeAttribute("data-fancybox");
        }
      });
      Fancybox.bind("[data-fancybox='gallery']");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, (_, i) => {
      return `<span class="carousel-button" data-index="${i}"></span>`;
    });

    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel-nav">
        ${buttonsHtml.join("")}
      </div>
      <span class="carousel-arrow carousel-arrow-right">&#8250;</span>`
    );

    const buttons = carousel.querySelectorAll(".carousel-button");
    const arrows = carousel.querySelectorAll(".carousel-arrow");
    let currentIndex = 0;

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (arrow.classList.contains("carousel-arrow-left")) {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
        } else {
          currentIndex = (currentIndex + 1) % items.length;
        }

        updateCarousel();
      });
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = parseInt(button.dataset.index, 10);
        updateCarousel();
      });
    });

    function updateCarousel() {
      items.forEach((item) => item.classList.remove("carousel-item--selected"));
      buttons.forEach((button) => button.classList.remove("carousel-button--selected"));

      items[currentIndex].classList.add("carousel-item--selected");
      buttons[currentIndex].classList.add("carousel-button--selected");

      // Update text and title based on the currently selected item
      const allInfos = document.querySelectorAll('.siteInfo');
      
      allInfos.forEach((info, i) => {
        info.style.display = i === currentIndex ? 'flex' : 'none';
      });
    }

    items[0].classList.add("carousel-item--selected");
    buttons[0].classList.add("carousel-button--selected");

    // Initially display only the first .siteInfo
    const allInfos = document.querySelectorAll('.siteInfo');
    allInfos.forEach((info, i) => {
      info.style.display = i === 0 ? 'flex' : 'none';
    });
  });
});

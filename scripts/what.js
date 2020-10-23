function hoverText(sector) {
  sector.addEventListener
}

function attachHoverTexts() {
  const sectorText = document.querySelector(".sector-text");
  for (s of document.querySelectorAll(".sector")) {
    s.addEventListener('mouseenter', (ev) => {
      sectorText.textContent = ev.target.getAttribute("data-title");
    });
    s.addEventListener('mouseleave', () => {
      sectorText.textContent = ""
    });
  }
}
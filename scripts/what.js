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

  for (e of document.querySelectorAll("#site .frame.explained")) {
    e.addEventListener('mouseenter', (ev) => {
      ev.target.classList.remove("cta");
      document.querySelector(`.explanation.${ev.target.getAttribute("data-text")}`).classList.remove("hidden");
    });
    e.addEventListener('mouseleave', (ev) => {
      document.querySelector(`.explanation.${ev.target.getAttribute("data-text")}`).classList.add("hidden");
    });
  }
}
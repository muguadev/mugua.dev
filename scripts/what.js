function attachHoverTexts() {
  const sectorText = document.querySelector(".sector-text");
  for (s of document.querySelectorAll(".sector")) {
    s.addEventListener('mouseenter', (ev) => {
      sectorText.textContent = ev.target.getAttribute("data-title");
    });
    s.addEventListener('mouseleave', () => {
      sectorText.textContent = ""
    });
    s.addEventListener(`click`, (ev) => {
      const clicked = ev.target.getAttribute("href");
      let delay = 5;
      for (f of document.querySelectorAll(`${clicked} .frame.explained`)) {
        f.classList.add("cta");
        f.style.animationDelay = `${delay}s`;
        delay += 0.5;
      }
    });
  }

  for (e of document.querySelectorAll(".frame.explained")) {
    e.addEventListener('mouseenter', (ev) => {
      for (f of ev.target.parentElement.querySelectorAll(".cta")){
        f.classList.remove("cta");
      }
      document.querySelector(`.explanation.${ev.target.getAttribute("data-text")}`).classList.remove("hidden");
    });
    e.addEventListener('mouseleave', (ev) => {
      document.querySelector(`.explanation.${ev.target.getAttribute("data-text")}`).classList.add("hidden");
    });
  }
}
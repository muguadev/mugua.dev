function clicked(ev) {
  alert(`Option ${ev.target.getAttribute("data-option")} has been clicked`);
}

function setOptionHandlers() {
  console.log("Attaching event handlers to menu options");
  for (o of document.querySelectorAll(".menu .option")) {
    o.addEventListener('click', clicked)
  }
}

const allOptions = document.querySelectorAll(".menu .option");

function show(pageId) {
  console.log(`Option ${pageId} has been clicked`);
  document.querySelector(`#${pageId}`).classList.remove("hidden");
  switch (pageId) {
    case 'how':
      animateTasks();
      break;
  }
  document.querySelector(".signature").classList.add("hidden")
}

function clicked(ev) {
  const target = ev.target;
  for (o of allOptions) {
    o.classList.add("hidden");
  };
  show(target.getAttribute("data-option"));
}

function setOptionHandlers() {
  console.log("Attaching event handlers to menu options");
  for (o of allOptions) {
    o.addEventListener('click', clicked)
  }
}

function hidePage(target) {
  console.log(`Closing ${target.getAttribute("id")}`)
  target.parentElement.classList.add("hidden");
  for (o of allOptions) {
    o.classList.remove("hidden");
  };
  document.querySelector(".signature").classList.remove("hidden");
}
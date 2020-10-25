function animateTasks() {
  let delay = 0;
  for (t of document.querySelectorAll(".animated")) {
    t.classList.add("blurred");
    t.style.animationDelay = `${delay}s`;
    delay += 1;
  }
}
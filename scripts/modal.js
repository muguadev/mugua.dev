function showModal(which) {
  const modal = document.querySelector(`#${which}.modal`)
  modal.style.display = "block";
}

function hideModal(which) {
  const modal = document.querySelector(`#${which}.modal`)
  modal.style.display = "none";
}
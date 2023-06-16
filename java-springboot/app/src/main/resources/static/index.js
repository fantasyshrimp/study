const modalBtn = document.getElementById('pop-up-modal');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

modalBtn.onclick = () => {
  modal.style.visibility = 'visible'
}

modal.onclick = () => {
  modal.style.visibility = 'hidden'
}

modalContent.onclick = (event) => {
  event.stopPropagation();
}
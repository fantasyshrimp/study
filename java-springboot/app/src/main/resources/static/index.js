const modalBtn = document.getElementById('pop-up-modal');
const modal = document.getElementById('modal');

modalBtn.onclick = () => {
  modal.style.visibility = 'visible'
}

modal.onclick = () => {
  modal.style.visibility = 'hidden'
}
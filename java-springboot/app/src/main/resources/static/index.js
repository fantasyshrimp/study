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


const header = document.querySelector('header')
const headerHolder = document.getElementById('header-holder');

headerHolder.onclick = (event) => {
  
  if (headerHolder.checked) {
    header.style.position = 'sticky'
    console.log("고정시도!")
  } else {
    header.style.position = 'relative'
    console.log("해제!")
  }
}
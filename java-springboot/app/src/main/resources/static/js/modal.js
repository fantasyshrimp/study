function createModal(content) {
  //
  const modalBackground = document.createElement('div')

  // 모달 배경 스타일 적용
  modalBackground.style.display = 'flex';
  modalBackground.style.position = 'fixed';
  modalBackground.style.top = 0;
  modalBackground.style.left = 0;

  modalBackground.style.width = '100vw';
  modalBackground.style.height = '100vh';

  modalBackground.style.backgroundColor = 'rgba(100,100,100,0.3)';

  modalBackground.style.justifyContent = 'center';
  modalBackground.style.alignItems = 'center';

  // 모달 배경 클릭이벤트
  modalBackground.onclick = () => {
    document.body.removeChild(modalBackground);
    //document.body.style.overflow = 'auto';
  }

  //
  const modalContent = document.createElement('div')
  
  // 모달 내용 스타일 적용
  modalContent.style.width = '';
  modalContent.style.height = '';

  modalContent.style.backgroundColor = '#aaaa'

  // 모달 내용 클릭이벤트 제어
  modalContent.onclick = (event) => {
    event.stopPropagation();
  }

  modalContent.innerHTML = content;


  modalBackground.appendChild(modalContent);
}
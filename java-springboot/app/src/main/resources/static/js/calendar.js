  // 현재 날짜 객체 생성
  const today = new Date();

  // 달력 그리기 함수 호출
  drawCalendar(today.getFullYear(), today.getMonth());

  function drawCalendar(year, month) {
    const calendarContainer = document.querySelector('.calendar');

    // 헤더 생성 (연도, 월)
    var header = document.createElement('h2');
    header.textContent = year + '년 ' + (month + 1) + '월';
    calendarContainer.appendChild(header);

    // 달력 테이블 생성
    var table = document.createElement('table');

    // 요일 헤더 생성
    var weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    var weekdaysRow = document.createElement('tr');
    for (var i = 0; i < weekdays.length; i++) {
      var th = document.createElement('th');
      th.textContent = weekdays[i];
      weekdaysRow.appendChild(th);
    }
    table.appendChild(weekdaysRow);

    // 달력 내용 채우기
    var firstDay = new Date(year, month, 1); // 해당 월의 첫째 날
    var lastDay = new Date(year, month + 1, 0); // 해당 월의 마지막 날
    var currentDate = new Date(firstDay); // 현재 날짜 설정 (첫째 날부터 시작)

    var tbody = document.createElement('tbody');
    var weekRow = document.createElement('tr');

    
    // 이전 달 날짜 채우기
    for (var i = 0; i < firstDay.getDay(); i++) {
      var td = document.createElement('td');
      td.classList.add('before-month')
      var beforeMonthLastDay = new Date(year, month, 0).getDate();
      td.textContent = beforeMonthLastDay - (firstDay.getDay() - 1 - i);
      weekRow.appendChild(td);
    }

    // 달력 날짜 채우기
    while (currentDate <= lastDay) {
      var td = document.createElement('td');
      td.textContent = currentDate.getDate();

      // 현재 날짜인 경우 "today" 클래스 추가
      if (
        currentDate.getDate() === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear()
      ) {
        td.classList.add('today');
      }
      td.addEventListener('click', dayClickEvent)

      weekRow.appendChild(td);

      // 주가 완성된 경우 다음 주로 이동
      if (currentDate.getDay() === 6) {
        tbody.appendChild(weekRow);
        weekRow = document.createElement('tr');
      }

      // 다음 날짜로 이동
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // 남은 빈 칸 채우기
    let index = 0;
    while (currentDate.getDay() > 0 && currentDate.getDay() <= 6) {
      var td = document.createElement('td');
      td.classList.add('after-month');
      var afterMonthFirstDay = new Date(year, month + 1, 1).getDate();
      td.textContent = afterMonthFirstDay + index++;
      weekRow.appendChild(td);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // 마지막 주 추가
    tbody.appendChild(weekRow);

    // 테이블에 내용 추가
    table.appendChild(tbody);

    // 달력 컨테이너에 테이블 추가
    calendarContainer.appendChild(table);
  }


  function dayClickEvent(target) {
    document.body.style.overflow = 'hidden';
    createModal(target.target ,target.target.innerHTML);
  }


  function createModal(parentElement, content) {
    //
    const modalBackground = document.createElement('div')
  
    // 모달 배경 스타일 적용
    modalBackground.style.display = 'flex';
    modalBackground.style.position = 'absolute';
    modalBackground.style.top = 0;
    modalBackground.style.left = 0;
  
    modalBackground.style.width = '100vw';
    modalBackground.style.height = '100vh';
  
    modalBackground.style.backgroundColor = 'rgba(100,100,100,0.3)';
  
    modalBackground.style.justifyContent = 'center';
    modalBackground.style.alignItems = 'center';
  
    // 모달 배경 클릭이벤트
    modalBackground.onclick = () => {
    parentElement.removeChild(modalBackground);
    document.body.style.overflow = 'auto';
    }
  
    //
    const modalContent = document.createElement('div')
    
    // 모달 내용 스타일 적용
    modalContent.style.width = '500px';
    modalContent.style.height = '500px';
  
    modalContent.style.backgroundColor = '#aaa'
  
    // 모달 내용 클릭이벤트 제어
    modalContent.onclick = (event) => {
      event.stopPropagation();
    }
  
    modalContent.innerHTML = content;
  
  
    modalBackground.appendChild(modalContent);
    parentElement.appendChild(modalBackground);
  }
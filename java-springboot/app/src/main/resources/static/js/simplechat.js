
const chatInput = document.getElementById('chat-message');
const chatNameInput = document.getElementById('chat-username');
const chatList = document.getElementById('recent-chat-list');

document.getElementById('tmp-request-btn').onclick = (e) => {
	console.log('btn click');
	sendMessage(chatInput.value, chatNameInput.value);
};

chatInput.addEventListener('keypress', function(key){
	if(key.key == 'Enter'){
		sendMessage(chatInput.value, chatNameInput.value);
	}
});

function sendMessage(message, username) {
	fetch('http://localhost:8080/study/simpleChat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name : username,
			message: message
		}),
	})
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		if (result.status === 'success') {
			chatList.removeChild(chatList.lastChild);
			const li = document.createElement('li');
			li.innerHTML = result.data.name + ' : ' 
			+ result.data.message + '   ' + result.data.sendDate;
			chatList.insertBefore(li, chatList.firstChild)
		}
	})
	.catch((error)=>{
		console.log(error);
	});

}




fetch('http://localhost:8080/study/simpleChat')
.then((response) => {
	return response.json();
})
.then((result) => {
	if (result.status === 'success') {
		result.data.forEach(element => {
			const li = document.createElement('li');
			li.innerHTML = element.name + ' : ' 
			+ element.message + '   ' + element.sendDate;
			chatList.appendChild(li);
		});
	}
})
.catch((error)=>{
	console.log(error);
});


const chatInput = document.getElementById("chat-message");
const chatNameInput = document.getElementById("chat-username");
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
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name : username,
			message: message
		}),
	})
	// .then((response) => {
	// 	console.log(response);
	// 	return response.text();
	// })
	// .then((data) => {
	// 	console.log(data);
	// })
	// .catch((error)=>{
	// 	console.log(error);
	// });

}
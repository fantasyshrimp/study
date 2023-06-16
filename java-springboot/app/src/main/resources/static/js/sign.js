{/* <input id="email" type="email" name="email">
<input id="password" type="password" name="password" >
<button id="sign-in-btn">sign in</button> */}

const email = document.getElementById('email');
const password = document.getElementById('password');
const signInBtn = document.getElementById('sign-in-btn');


signInBtn.onclick = () => {
  fetch('http://localhost:8080/study/sign/in', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email : email.value,
			password: password.value
		}),
	})
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		if (result.status === 'success') {
			console.log('로그인 성공');
		} else {
      console.log('로그인 실패');
    }
	})
	.catch((error)=>{
		console.log(error);
	});
}
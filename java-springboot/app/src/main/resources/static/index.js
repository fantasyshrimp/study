
document.getElementById('tmp-request-btn').onclick = (e) => {
    console.log('btn click');

    fetch('http://localhost:8080/study/tmp')
    .then((response) => {
        console.log(response);
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}
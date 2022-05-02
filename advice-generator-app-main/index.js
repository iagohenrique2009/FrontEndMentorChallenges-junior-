const resDiv = document.getElementById("advice");
const btn = document.getElementById("getdata");
const advid = document.getElementById("id");

window.onload = () => {
    getadvice();
}

function getadvice(){
    fetch("https://api.adviceslip.com/advice").then(response =>{
        return response.json();
    }).then(adviceData => {
        const advobj = adviceData.slip;
        resDiv.innerHTML = advobj.advice;
        advid.innerHTML = advobj.id;
    }).catch(error =>{
        alert("Error on getting advice :<")
    });
}

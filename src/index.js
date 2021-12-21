import controllerUserLogin from './moduloInterface.js';

var myModal = new bootstrap.Modal(document.getElementById('myModal'));

const entrarUsuario = document.getElementById("btnLogin");
entrarUsuario.addEventListener("click", (e)=>{
    let nome = document.getElementById("user").value,
    senha = document.getElementById("password").value;
    let logAttempt = controllerUserLogin.loginInfo(nome, senha);
    modalResponse(logAttempt);
});

function modalResponse(msg){
    document.querySelector(".modal-title").innerHTML = msg.title;
    document.querySelector(".modal-body p").innerHTML = msg.bodyModal;
    document.querySelector(".modal-content .b1").innerHTML = msg.b1;
    document.querySelector(".modal-content .b2").innerHTML = msg.b2;
    myModal.show();
}

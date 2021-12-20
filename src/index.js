import controllerUserLogin from './moduloInterface.js';

var myModal = new bootstrap.Modal(document.getElementById('myModal'));
debugger;

const entrarUsuario = document.getElementById("btnLogin");
entrarUsuario.addEventListener("click", (e)=>{
    let nome = document.getElementById("user").value,
    senha = document.getElementById("password").value;
    if(!nome || nome === "" || !senha || senha === ""){
        document.querySelector(".modal-body p").innerHTML = "Campos vazios";
        myModal.show();
    } else {
        controllerUserLogin.loginInfo(nome, senha);
    }
});


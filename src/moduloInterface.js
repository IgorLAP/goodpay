import userLogin from './moduloDados.js';

class ControllerUserLogin{
    constructor(status){
        this.status = status;
    }
    checkLogin(){
        this.status = true;
    }
    loginInfo(user, senha){
        let infoCheck = userLogin.find((userLogin)=> userLogin.username === user);
        if(!infoCheck){
            alert("Usuario n existe");
        } else {
            if(infoCheck.senha === senha){
                this.checkLogin();
                alert(`Você está ${this.status}`);
            } else {
                alert("Não logou");
            }
        }
    }
}

const controllerUserLogin = new ControllerUserLogin();
export default controllerUserLogin;
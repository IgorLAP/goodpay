import userLogin from './moduloDados.js';
import comunicacaoModal from './moduloComunicacao.js';

class ControllerUserLogin {
    constructor(status) {
        this.status = status;
        this.attempts = 0;
    }
    checkLogin() {
        this.status = true;
    }
    checkOutLogin(){
        this.status = false;
    }
    loginInfo(user, senha) {
        localStorage.clear();
        let infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        if (!user || user === "" || !senha || senha === "") {
            this.checkOutLogin();
            localStorage.status = this.status;
            return comunicacaoModal.find(i => i.idModal === "camposVazios1");
        } else if (!infoCheck) {
            this.checkOutLogin();
            localStorage.status = this.status;
            return comunicacaoModal.find(i => i.idModal === "usuarioNaoExiste1");
        } else {
            if (infoCheck.senha === senha) {
                localStorage.status = this.status;
                return comunicacaoModal.find(i => i.idModal === "loginExecutado1");
            } else {
                this.attempts++;
                if(this.attempts !== 3){
                    this.checkOutLogin();
                    localStorage.status = this.status;
                    let tentativasObject = comunicacaoModal.find(i => i.idModal === "tentativasDemais1");
                    tentativasObject.bodyModal = `Você já fez ${this.attempts} tentativa(s)! Com três será redirecionado(a) para recuperar senha`;
                    return tentativasObject; 
                } else {
                    this.attempts = 0;
                    this.checkOutLogin();
                    localStorage.status = this.status;
                    return comunicacaoModal.find(i => i.idModal === "falhaLogin1");
                }
            }
        }
    }
}

const controllerUserLogin = new ControllerUserLogin();
export default controllerUserLogin;
import userLogin from './moduloDados.js';
import comunicacaoModal from './moduloComunicacao.js';

class ControllerUserLogin {
    constructor(status) {
        this.status = status;
    }
    checkLogin() {
        this.status = true;
    }
    loginInfo(user, senha) {
        let infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        if (!user || user === "" || !senha || senha === "") {
            return comunicacaoModal.find(i => i.idModal === "camposVazios1");
        } else if (!infoCheck) {
            return comunicacaoModal.find(i => i.idModal === "usuarioNaoExiste1");
        } else {
            if (infoCheck.senha === senha) {
                this.checkLogin();
                return comunicacaoModal.find(i => i.idModal === "loginExecutado1");
            } else {
                return comunicacaoModal.find(i => i.idModal === "falhaLogin1");
            }
        }
    }
}

const controllerUserLogin = new ControllerUserLogin();
export default controllerUserLogin;
import rotaApp from './moduloRotas.js';

class ControleRotasApp{
    constructor(status, idRota, tela, linkUrl){
        this.status = status;
        this.idRota = idRota;
        this.tela = tela;
        this.linkUrl = linkUrl;
    }
    validaRota(status, idRota){
        if(idRota === "tentativasDemais1") idRota = "falhaLogin1";
        if(status === "true"){
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        } else {
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        }
    }
}

const controlerRotasApp = new ControleRotasApp();
export default controlerRotasApp;
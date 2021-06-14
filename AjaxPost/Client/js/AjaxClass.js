/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var _peticio_http=null;
    /*Constants per analitzar l'estat en què es troba la petició*/
    const READY_STATE_UNSENT = 0;
    const READY_STATE_OPENED = 1;
    const READY_STATE_HEADERS_RECEIVED = 2;
    const READY_STATE_LOADING = 3;
    const READY_STATE_DONE = 4;
    const SERVER_STATUS_OK = 200;
    const AEMET_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYmVsLmFsY29iYUBjaXJ2aWFudW0uY2F0IiwianRpIjoiYzgyODI5N2YtMWY1Yi00N2Q4LTk3NTAtYjZiZDY0NzhiNzU0IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MTUzNzQyNDQsInVzZXJJZCI6ImM4MjgyOTdmLTFmNWItNDdkOC05NzUwLWI2YmQ2NDc4Yjc1NCIsInJvbGUiOiIifQ.btDcX3ipglxYOMPCmjgG__B-7Es33su1REkMw6h6TtA";
class AjaxClass{
    
    
    constructor(){
        //Atribut privat que contindrà l'objecte XMLHttpRequest
        _peticio_http = null;
    }
    
    /*Inicialitza l'objecte XMLHttpRequest en funció del tipus de
     * navegador (en realitat no té gaire sentit, perquè els navegadors
     * antics no suportaran l'ECMA6 :S*/
    inicialitzarPeticio(){
        if(window.XMLHttpRequest) {
            _peticio_http = new XMLHttpRequest();
        }
        else if(window.ActiveXObject) {
            _peticio_http = new ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    /*Funció genèrica que carrega el contingut url mitjançant AJAX*/
    carregarContingut (url, metode, params, funcioResposta, funcioCapsaleres){
        //Si encara no hem inicialitzat la petició, ho fem ara...
        if(!_peticio_http){
            this.inicialitzarPeticio();
        }
        _peticio_http.onreadystatechange=() =>{
            if(_peticio_http.readyState === READY_STATE_DONE) {
              if(_peticio_http.status === SERVER_STATUS_OK) {
                  funcioResposta(JSON.parse(_peticio_http.responseText));
              }
            }else if(_peticio_http.readyState === READY_STATE_HEADERS_RECEIVED){
                funcioCapsaleres(_peticio_http.getAllResponseHeaders())
            }
        };
        _peticio_http.open(metode, url + "/?api_key="+AEMET_API_KEY,true);
        if(!params)
            params=null;
        _peticio_http.setRequestHeader("cache-control", "no-cache");
        _peticio_http.send(params);
    };
    
}
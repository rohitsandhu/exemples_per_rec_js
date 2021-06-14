window.addEventListener("load",loadWindow);
function loadWindow(){
    let recurs = document.getElementById("recurs");
    recurs.value= window.location;

    let boto = document.getElementById("enviar");
    boto.addEventListener("click",function(){
        let ajaxClass=new AjaxClass();
        ajaxClass.carregarContingut(
            document.getElementById("recurs").value,
            "GET", null,function(text){
                console.log(text.length);

                let dades=text.filter(function(obj){
                    return obj.zona_comarcal="624401";
                });

                console.log(dades.length);
                console.log(dades[0])
                document.getElementById("continguts").innerText=dades;
            }, function(text){
                document.getElementById("capsaleres").innerText=text;
            }
        )
    })
   
}
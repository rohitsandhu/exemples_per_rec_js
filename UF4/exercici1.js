$(document).ready(function(){

    $('#cicle').on("change",function(){

        var res = "?codi="+$('#cicle').val();
        var xhr = new XMLHttpRequest;
        xhr.open('GET', 'moduls.php'+res);
        xhr.responseType = 'document';
        xhr.overrideMimeType('text/xml');
        
        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                // console.log(xhr.responseXML);

                if(0 == $('#cicle').val()){
                    $('#moduls').empty();
                }else{
                    var arr = xhr.responseXML.getElementsByTagName("modul")
                    $('#moduls').empty()
                    for(var i = 0; i < arr.length; i++){
                        var option = document.createElement("option")
                        option.innerText  = arr[i].innerHTML
                        option.value = arr[i].innerHTML;                      
                        $('#moduls').append(option)
                    }
                }
            }
        };
            
        xhr.send();
        


        // console.log(data)       


    })
})



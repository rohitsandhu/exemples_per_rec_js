$.ajax({
    type:'post',
    url: '../Server/comunitats.php',
    success:function(data) {
        console.log(data);
        $("#pr_name").removeAttr("disabled")
        $("#mu_name").removeAttr("disabled")
        var arr = data.getElementsByTagName("ca")
        $('#ca_name').empty();
        
        for(var i = 0; i < arr.length; i++){
            var option = document.createElement("option")
            option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
            option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
            option.classList.add("text-dark")              
            $('#ca_name').append(option)
        }
        $("#pr_name").trigger("change");
    },error: function () {
    }
});

$("#ca_name").on("change", function(){
    console.log("ca changing");
    $('#pr_name').empty()

    $.ajax({
        type:'post',
        url: '../Server/provinciesByComunitat.php',
        data: {
            'codiCom': $('#ca_name').val(),
        },
        success:function(data) {
            console.log(data);
            var arr = data.getElementsByTagName("prov")
            $('#pr_name').empty();
            
            for(var i = 0; i < arr.length; i++){
                var option = document.createElement("option")
                option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
                option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
                option.classList.add("text-dark")              
                $('#pr_name').append(option)
            }

            $("#pr_name").trigger("change"); 
        },error: function () {
        }
    });
})


$("#pr_name").on("change", function(){
    console.log("pr changing");

    $('#il_name').addClass("hidden")
    $.ajax({
        type:'post',
        url: '../Server/illes.php',
        data: {
            'codiProv': $('#pr_name').val(),
        },
        success:function(data) {
            console.log(data);
            var arr = data.getElementsByTagName("illa")
            $('#il_name ').empty();
            
            for(var i = 0; i < arr.length; i++){
                var option = document.createElement("option")
                option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
                option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
                option.classList.add("text-dark")              
                $('#il_name').append(option)
                $('#il_name').removeClass("hidden")
            }
        },error: function () {
        }
    });



    if($('#il_name').val() == null){
        $.ajax({
            type:'post',
            url: '../Server/municipisByProvincia.php',
            data: {
                'codiProv': $('#pr_name').val(),
            },
            success:function(data) {
                console.log("municipis");
                console.log(data);
                console.log($('#pr_name').val());

                var arr = data.getElementsByTagName("mun")
                $('#mu_name').empty();
                
                for(var i = 0; i < arr.length; i++){
                    var option = document.createElement("option")
                    option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
                    option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
                    option.classList.add("text-dark")              
                    $('#mu_name').append(option)
                }
            },error: function () {
            }
        });
    }else{
        $.ajax({
            type:'post',
            url: '../Server/municipisByProvincia.php',
            data: {
                'codiProv': $('#pr_name').val(),
                'codiIlla': $('#il_name').val(),
            },
            success:function(data) {
                console.log("municipis");
                console.log(data);
                console.log($('#il_name').val());
                console.log($('#pr_name').val());
                var arr = data.getElementsByTagName("mun")
                $('#mu_name').empty();
                
                for(var i = 0; i < arr.length; i++){
                    var option = document.createElement("option")
                    option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
                    option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
                    option.classList.add("text-dark")              
                    $('#mu_name').append(option)
                }
            },error: function () {
            }
        });
    }

})

$("#il_name").on("change", function(){
    console.log("il changing");

    $.ajax({
        type:'post',
        url: '../Server/municipisByProvincia.php',
        data: {
            'codiProv': $('#pr_name').val(),
            'codiIlla': $('#il_name').val(),
        },
        success:function(data) {
            console.log("municipis");
            console.log(data);
            console.log($('#il_name').val());
            console.log($('#pr_name').val());
            var arr = data.getElementsByTagName("mun")
            $('#mu_name').empty();
            
            for(var i = 0; i < arr.length; i++){
                var option = document.createElement("option")
                option.innerText  = arr[i].getElementsByTagName("nom")[0].innerHTML;
                option.value = arr[i].getElementsByTagName("codi")[0].innerHTML;
                option.classList.add("text-dark")              
                $('#mu_name').append(option)
            }
        },error: function () {
        }
    });
})

$(document).ready(function(){
    $("#ca_name").trigger("change"); 
})

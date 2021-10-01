function conferirResposta(questionario){
    if (questionario == 1){
        $('#v1').addClass("remover");
    }

    if (questionario == 2){
        $('#v2').addClass("remover");
    }

    if (questionario == 3){
        $('#v3').addClass("remover");
    }

    if (questionario == 4){
        $('#m4').addClass("remover");
    }

    if (questionario == 5){
        $('#v5').addClass("remover");
    }

    if (questionario == 6){
        $('#v6').addClass("remover");
    }

    if (questionario == 7){
        $('#m7').addClass("remover");
    }

    if (questionario == 8){
        $('#v8').addClass("remover");
    }

    if (questionario == 9){
        $('#m9').addClass("remover");
    }

    if (questionario == 10){
        $('#v10').addClass("remover");
    }

    if (questionario == 11){
        $('#v11').addClass("remover");
    }

    if (questionario == 12){
        $('#m12').addClass("remover");
    }

    $(`#resp${questionario}`).removeClass("remover");
    
}


$( document ).ready(function() {

    $("#v1").click(function(){
        conferirResposta(1);
    });
    $("#m1").click(function(){
        conferirResposta(1);
    });

    $("#v2").click(function(){
        conferirResposta(2);
    });
    $("#m2").click(function(){
        conferirResposta(2);
    });

    $("#v3").click(function(){
        conferirResposta(3);
    });
    $("#m3").click(function(){
        conferirResposta(3);
    });

    $("#v4").click(function(){
        conferirResposta(4);
    });
    $("#m4").click(function(){
        conferirResposta(4);
    });

    $("#v5").click(function(){
        conferirResposta(5);
    });
    $("#m5").click(function(){
        conferirResposta(5);
    });

    $("#v6").click(function(){
        conferirResposta(6);
    });
    $("#m6").click(function(){
        conferirResposta(6);
    });

    $("#v7").click(function(){
        conferirResposta(7);
    });
    $("#m7").click(function(){
        conferirResposta(7);
    });

    $("#v8").click(function(){
        conferirResposta(8);
    });
    $("#m8").click(function(){
        conferirResposta(8);
    });

    $("#v9").click(function(){
        conferirResposta(9);
    });
    $("#m9").click(function(){
        conferirResposta(9);
    });

    $("#v10").click(function(){
        conferirResposta(10);
    });
    $("#m10").click(function(){
        conferirResposta(10);
    });

    $("#v11").click(function(){
        conferirResposta(11);
    });
    $("#m11").click(function(){
        conferirResposta(11);
    });

    $("#v12").click(function(){
        conferirResposta(12);
    });
    $("#m12").click(function(){
        conferirResposta(12);
    });

});
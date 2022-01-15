var respostas_certas = 0;
var perguntas_respondidas = 0;

function conferirResposta(questionario){
    perguntas_respondidas += 1;
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
        $('#v12').addClass("remover");
    }

    if (questionario == 13){
        $('#v13').addClass("remover");
    }

    $(`#resp${questionario}`).removeClass("remover");

    if (perguntas_respondidas == 13){
        verificarCertificado();
    }
    
}

function verificarCertificado(){
    if ((respostas_certas / 13) >= 0.8){
        // Emitir Certificado
        $('#certificado').removeClass("remover");
        $(window).scrollTop($('#certificado').offset().top);
    }else{
        $('#certificado-2').removeClass("remover");
        $(window).scrollTop($('#certificado-2').offset().top);
    }
}


$( document ).ready(function() {

    $("#v1").click(function(){
        $('#resp1').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(1);
    });
    $("#m1").click(function(){
        respostas_certas += 1;
        $('#resp1').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(1);
    });

    $("#v2").click(function(){
        $('#resp2').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(2);
    });
    $("#m2").click(function(){
        respostas_certas += 1;
        $('#resp2').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(2);
    });

    $("#v3").click(function(){
        $('#resp3').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(3);
    });
    $("#m3").click(function(){
        respostas_certas += 1;
        $('#resp3').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(3);
    });

    $("#v4").click(function(){
        respostas_certas += 1;
        $('#resp4').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(4);
    });
    $("#m4").click(function(){
        $('#resp4').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(4);
    });

    $("#v5").click(function(){
        $('#resp5').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(5);
    });
    $("#m5").click(function(){
        respostas_certas += 1;
        $('#resp5').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(5);
    });

    $("#v6").click(function(){
        $('#resp6').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(6);
    });
    $("#m6").click(function(){
        respostas_certas += 1;
        $('#resp6').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(6);
    });

    $("#v7").click(function(){
        respostas_certas += 1;
        $('#resp7').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(7);
    });
    $("#m7").click(function(){
        $('#resp7').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(7);
    });

    $("#v8").click(function(){
        $('#resp8').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(8);
    });
    $("#m8").click(function(){
        respostas_certas += 1;
        $('#resp8').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(8);
    });

    $("#v9").click(function(){
        respostas_certas += 1;
        $('#resp9').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(9);
    });
    $("#m9").click(function(){
        $('#resp9').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(9);
    });

    $("#v10").click(function(){
        $('#resp10').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(10);
    });
    $("#m10").click(function(){
        respostas_certas += 1;
        $('#resp10').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(10);
    });

    $("#v11").click(function(){
        $('#resp11').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(11);
    });
    $("#m11").click(function(){
        respostas_certas += 1;
        $('#resp11').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(11);
    });

    $("#v12").click(function(){
        $('#resp12').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(12);
    });
    $("#m12").click(function(){
        respostas_certas += 1;
        $('#resp12').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(12);
    });

    $("#v13").click(function(){
        $('#resp13').append(
            `<iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>`
        )
        conferirResposta(13);
    });
    $("#m13").click(function(){
        respostas_certas += 1;
        $('#resp13').append(
            `<iframe src="https://giphy.com/embed/z8XtwKGIRQSBCmU4sW" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW">RESPOSTA CERTA</a></p>`
        )
        conferirResposta(13);
    });


});
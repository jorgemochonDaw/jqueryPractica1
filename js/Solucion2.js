function inicializar()  {
    eventos();
}

inicializar();

function eventos() {
    $('#btn-1').click(apartadoAsinParametrosFadeIn);
}

function apartadoAsinParametrosFadeIn() {
    $('div').css("opacity", 0.5);
}
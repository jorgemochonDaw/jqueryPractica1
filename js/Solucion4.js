function inicializar() {
    eventos();
}

inicializar();

function eventos() {
    $('#cuadro').click(() => {
        $('#boton').prop('disabled', false);
        $('#cuadro').animate({
            right: '-=100px'
        });
        $('h3').animate({
            fontSize: '+=10px'
        });
    });
    $('#boton').click(() => {
        $('#cuadro').animate({
            left: '100px'
        });
        $('h3').animate({
            fontSize: '30px'
        });
        $('#boton').prop('disabled', true);
    });
}
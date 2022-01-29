function inicializar() {
    eventos();
}

inicializar();

function eventos() {
    $('#btn-1').click(() => {
        $('#div-1').fadeIn();
        $('#div-2').fadeIn('slow');
        $('#div-3').fadeIn('3000');
    });
    $('#btn-2').click(() => {
        $('#div-1').fadeOut();
        $('#div-2').fadeOut('slow');
        $('#div-3').fadeOut('3000');
    });
    $('#btn-3').click(() => {
        $('#div-1').fadeToggle();
        $('#div-2').fadeToggle('slow');
        $('#div-3').fadeToggle('3000');
    });
    $('#btn-4').click(() => {
        $('#div-1').fadeTo('slow', 0.15);
        $('#div-2').fadeTo('slow', 0.4);
        $('#div-3').fadeTo('slow', 0.7);
    });
}
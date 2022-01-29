function inicializar() {
    eventos();
}

inicializar();

function eventos() {
    $('#div-1').click(() => {
        $('#div-2').slideDown();
    });
    $("#div-2").click(() => {
        $("#div-3").slideUp();
    });
    $("#div-3").click(() => {
        $("#div-4").slideToggle();
    });
    $("#div-4").click(() => {
        $("#div-2").slideUp();
    });
}
function inicializar() {
    eventos();
}

inicializar();

function eventos() {
    $('#p').hover(apartadoBHhover, apartadoBblur);
    $('#cuadro').blur(apartadoCblur);
    $('#cuadro').focus(apartadoCfocus);
}

$(document).mousedown((e) => {
    if (e.which == 3) {
        return alert('Has clikeado en el botón derecho del ratón');
    }
    return;
});


function apartadoBHhover(e) {
    e.preventDefault();
    return alert('Encima del párrafo');
}

function apartadoBblur(e) {
    e.preventDefault();
    return alert('Fuera del párrafo');
}

function apartadoCblur(e) {
    e.preventDefault();
    return $('#cuadro').css('background-color', 'pink');
}

function apartadoCfocus(e) {
    e.preventDefault();
    return $('#cuadro').css('background-color', 'red');
}
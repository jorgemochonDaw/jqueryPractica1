function inicializar() {
    eventos();
}

inicializar();

function eventos() {
    $('#btn-1').click(() => {
        $('#anniadir').fadeIn('slow', () => {
            $('#anniadir').html('Texto añadido.').css('color', 'red');
        })
    });
    $('#btn-2').click(() => {
        let valorInput = $('#nuevo').val();
        $(document.createElement('li')).html(`${valorInput}`).appendTo('ul');
    });
}
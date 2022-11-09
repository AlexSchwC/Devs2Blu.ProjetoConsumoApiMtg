$('document').ready(() => {
    loadFooter();
})

const getPagina = (page, target) => {
    $.ajax({
        url: page,
        dataType: 'html',
        success: (pageResponse) => {
            $(target).html(pageResponse);
        }
    });
}

const loadFooter = () => {
    let footer = document.createElement('footer');
    $(footer).addClass('container-fluid align-self-end');
    $(footer).attr('id', 'footer-container');
    $('#body-wrapper').append(footer);
    getPagina('../views/footer.html', $('#footer-container'));
}

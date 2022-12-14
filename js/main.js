$('document').ready(() => { 
    loadHeader();
    loadFooter();
    console.log('header e footer carregados')
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
    $(footer).addClass('p-0 container-fluid align-self-end');
    $(footer).attr('id', 'footer-container');
    $('#body-wrapper').append(footer);
    getPagina('../views/footer.html', $('#footer-container'));
}

const loadHeader = () => {
    let header = document.createElement('header');
    $(header).addClass('p-0 container-fluid align-self-start');
    $(header).attr('id', 'header-container');
    $('#body-wrapper').prepend(header);
    getPagina('../views/header.html', $('#header-container'));
}

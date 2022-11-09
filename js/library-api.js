//CONFS
const URL_API = 'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=cmc&page=2&q=c%3Ared+pow%3D3&unique=cards';


$(document).ready(() =>{
    $('#get-cartas').click((e)=>{
        getCard();
    })
});

const getCard = () =>{
    $.ajax({
        url: URL_API,
        datatype: 'json',
        success: (data) =>{
            let listCards = document.createElement('ul');
            $(listCards).addClass('row');
            $('#get-cards').html(listCards);

            data.data.forEach((card, i) => {
                //elementos HTML
                let li = document.createElement('li');
                let carta = document.createElement('div');
                let cardHeader = document.createElement('div');
                let cardBody = document.createElement('div');
                let img = document.createElement('img');

                //estilizando
                $(li).addClass('col-4');
                $(carta).addClass('card');
                $(cardHeader).addClass('card-header');
                $(cardHeader).addClass('card-body');

                //atributos
                $(img).attr('src', card.image_uris.small);
                $(li).attr(`card${i}`);
                $(cardBody).html(`<h1>${card.name}</h1>`);

                //append
                $(carta).append(cardHeader).append(cardBody);
                $(cardBody).append(img);
                $(li).append(carta);
                $(listCards).append(li);

            });
        }
    })
};


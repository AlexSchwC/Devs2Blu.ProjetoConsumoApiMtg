//CONFS
const URL_API = 'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=cmc&page=2&q=c%3Ared+pow%3D3&unique=cards';


$(document).ready(() =>{
    getCard();
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
                let a = document.createElement('a');
                let li = document.createElement('li');
                let carta = document.createElement('div');
                let cardHeader = document.createElement('div');
                let cardBody = document.createElement('div');
                let img = document.createElement('img');

                //estilizando
                $(carta).addClass('card')
                $(li).addClass('col-4');
                $(carta).addClass('card');
                $(listCards).addClass('d-flex');
                $(cardBody).addClass('card-body');
                $(img).addClass('p-3');
                $(cardHeader).addClass('card-header');
                $(cardHeader).addClass('bg-dark');
                $(cardBody).addClass('card-body');
                $(carta).addClass('m-2');
                $(carta).addClass('mb-3');

                //atributos
                $(img).attr('src', card.image_uris.small);
                $(li).attr('id', `card${i}`);
                $(cardHeader).html(`<h2>${card.name}</h2>`);

                //append
                $(carta).append(cardHeader).append(cardBody);
                $(cardBody).append(img);
                $(a).append(carta);
                $(li).append(a);
                $(listCards).append(li)

            });
        }
    })
};


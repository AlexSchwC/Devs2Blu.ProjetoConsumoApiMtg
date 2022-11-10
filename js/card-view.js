$('document').ready(() => {
    if (!window.localStorage.getItem('card-result')) {
        window.location.href('index.html');
    }

    let cardResult = getJsonItem('card-result');
    if (cardResult.length > 1) {
        window.location.href('/views/galeria.html');
    } else if (cardResult.length === 1) {
        cardResult = cardResult[0];
    }
    $('#card-view-image').attr('src', cardResult.image_uris.large);
    $('#card-name').text(cardResult.name);
    $('#card-colors').text(cardResult.mana_cost);
    $('#card-type').text(cardResult.type_line);
    $('#card-oracle').text(cardResult.oracle_text);
    $('#card-flavor').text(`"${cardResult.flavor_text}"`);
})
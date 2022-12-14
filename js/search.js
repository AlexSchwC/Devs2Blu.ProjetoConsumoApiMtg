const BASE_SEARCH_URI = 'https://api.scryfall.com/cards/search?q='

$('document').ready(() => {
    $('#btn-pesquisa-card').click(async (e) => {
        e.preventDefault();
        console.log('teste');
        if ($('#input-perquisa-card').val()) {
            let input = $('#input-perquisa-card').val();
            console.log(input);
            let result = await pesquisaCard(input);
            window.localStorage.setItem('card-result', JSON.stringify(result));
            window.location.href = '/views/card.html';
        }
    })
})

const pesquisaCard = async (cardName) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_SEARCH_URI}!${cardName}`,
            datatype: 'json',
            success: (data) =>{
                console.log('Card encontrado');
                return resolve(data.data[0]);
            },
            error: () => {
                $.ajax({
                    url: `${BASE_SEARCH_URI}${cardName}`,
                    datatype: 'json',
                    success: (data) => {
                        console.log('Resultados aproximados...')
                        return resolve(data.data);
                    },
                    error: () => {
                        alert('nao foi encontrado nada tiozão');
                        return reject(error);
                    }
                })
            }
        })
    })     
}
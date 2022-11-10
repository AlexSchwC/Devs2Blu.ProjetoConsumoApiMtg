const BASE_SEARCH_URI = 'https://api.scryfall.com/cards/search?q='

$('document').ready(() => {
    $('#btn-pesquisa-card').click(async (e) => {
        if ($('#input-perquisa-card').val()) {
            let input = $('#input-perquisa-card').val();
            let result = await pesquisaCard(input);
            window.localStorage.setItem('card-result', JSON.stringify(result));
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
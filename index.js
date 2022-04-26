async function fetchApi() {
    //pega valor do input
    let inputCep = document.getElementById('inputCep').value
    console.log(inputCep)
    //validaçao do input que não foi atribuido valor nenhum
    if(inputCep.length == 0){
        alert('O campo do CEP precisa ser preenchido')
        return 
    }
    //validação do input com menos de oito caracteres
    if(inputCep.length < 8){
        alert(`Um CEP possui 8 caravteres, voce preencheu o campo do CEP com a quantidade de caracteres invalida, voce digitou ${inputCep.length} caracteres`)
        return 
    }
    //coloca o valor do input na url do endpoint
    let url = `https://viacep.com.br/ws/${inputCep}/json/`;
    console.log(url)
    
    //defino uma variavel com a resposta da minha requisicao fetch no endpoint acima
    let resposta = await fetch(url);
    console.log(resposta)

    //formata a resposta
    const formatadaResposta = await resposta.json();
    console.log(formatadaResposta)
    // validaçao a resposta teve sucesso
    if(resposta.ok){
        return console.log("Sucesso", formatadaResposta)
    }
    return console.log('Erro: ', formatadaResposta?.message)
}
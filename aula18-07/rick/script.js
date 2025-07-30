const characterId = document.getElementById("characterId")
const btnGo = document.getElementById("btn-go")
const content = document.getElementById("content")
const img = document.getElementById("img")

// faz a requisição da api atraves da função fetch
const fetchApi = (value) => {
    // guarda o resultado da minha fetch
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data
        })

    return result
}
// toda vez que eu chamar essa função ela vai me retornar os dados e o objeto 
fetchApi(10)


// usei o async para falar que é uma função assincrona pois preciso segurar a informação na tela
// coloquei await para esperar a minha função fecthApi acontecer e me da um retorno 
btnGo.addEventListener(`click`, async (event) => {
    // eu pego o valor do input e guardo dentro da variavel result que criei acima 
    // isso previni o padrão da atualização da página
    event.preventDefault()
    const result = await fetchApi(characterId.value)
content.textContent = `${JSON.stringify(result, undefined,2)}`
// o stringify é oque faz o json aparecer limpo e bonito na tela

img.src = `${result.image}`
})
    
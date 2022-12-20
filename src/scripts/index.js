/* Monte sua lógica aqui */
const searchPokemon = async (pokemon) => {
    const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => response)
    
    
    console.log(apiResp)
    return apiResp
}


const renderPokemon = async (pokemon) => {
    
    const data = await searchPokemon(pokemon)

    //console.log(data)
    
    const pokemonName =  document.querySelector('.pokemon__name')
    const pokemonImg = document.querySelector('.pokemon__img')
    const pokemonDescrition = document.querySelector('.pokemon__description')


    pokemonName.innerHTML = data.name
    pokemonImg.src = data['sprites']['front_default']
    pokemonDescrition.innerHTML = data.abilities[0]
    //console.log(pokemonImg)
}
renderPokemon('121')  



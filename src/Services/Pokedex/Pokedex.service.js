const BASE_URL = "https://pokeapi.co/api/v2/";

const fetchAllPokemons = async (limit, offset) => {
    const response = await fetch(`${BASE_URL}pokemon?limit=${ limit }&offset=${ offset }`);
    const pokemonsResponse = await response.json();

    const pokemonsUrl = pokemonsResponse.results.map(
        pokemon => pokemon.url
    )

    return pokemonsUrl
}

const fetchUrlPokemons = async (pokemonsUrl) => {
    //Arreglo de promesas
    const pokemonsPromises = pokemonsUrl.map(
        url => fetch(url)
    )

    const results = await Promise.all(pokemonsPromises);

    const resultsJSON = results.map(
        result => result.json()
    )

    const pokemons = await Promise.all(resultsJSON)

    return pokemons
}

const transformPokemonData = (pokemonData) => {
    if(!pokemonData) return null

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        thumbnail: pokemonData.sprites.front_default,
        abilities: pokemonData.abilities.map(
            ability => ability.ability.name
        ),
        types: pokemonData.types.map(
            type => type.type.name
        )
    }
}

const pokemonServices = async (limit, offset) => {
    try {
        const urls = await fetchAllPokemons(limit, offset)
        const pokemons = await fetchUrlPokemons(urls)
    
        const mappedPokemons = pokemons.map(
            pokemon => transformPokemonData(pokemon)
        )

        return mappedPokemons
    }
    catch(error) {
        console.error(error)
        return []
    }
}

export default pokemonServices
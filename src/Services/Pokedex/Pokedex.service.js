const BASE_URL = "https://pokeapi.co/api/v2/";

//Retorna un arreglo de urls correspondientes a cada pokemon
const fetchAllPokemons = async (limit, offset) => {
    const response = await fetch(`${BASE_URL}pokemon?limit=${ limit }&offset=${ offset }`);
    const pokemonsResponse = await response.json();

    const pokemonsUrl = pokemonsResponse.results.map(
        pokemon => pokemon.url
    );

    return pokemonsUrl;
}

//Retorna un arreglo de pokemons (con todos sus datos)
const fetchUrlPokemons = async (pokemonsUrl) => {
    //Arreglo de promesas
    const pokemonsPromises = pokemonsUrl.map(
        url => fetch(url)
    );

    const results = await Promise.all(pokemonsPromises);

    const resultsJSON = results.map(
        result => result.json()
    );

    const pokemons = await Promise.all(resultsJSON);

    return pokemons;
}

//Se transforman los objetos pokemons para que solo contengan la información que necesitamos en nuestra app
const transformPokemonData = (pokemonData) => {
    if(!pokemonData) return null;

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
    };
}

const pokemonServices = {
    getAllPokemons: async (limit, offset) => {
        try {
            const urls = await fetchAllPokemons(limit, offset);
            const pokemons = await fetchUrlPokemons(urls);
        
            const mappedPokemons = pokemons.map(
                pokemon => transformPokemonData(pokemon)
            );
    
            return mappedPokemons;
        }
        catch(error) {
            console.error(error);
            return [];
        }
    },
    getPokemon: async (name = "") => {
        try {
            const response = await fetch(`${BASE_URL}pokemon/${name}`)
            const data = await response.json();

            if(!data) throw new Error('Pokemon not found');

            const transformPokemon = transformPokemonData(data);

            return {
                success: true,
                pokemon: transformPokemon
            }
        }
        catch (error){
            console.error({error});
            return {
                success: false,
                pokemon: null
            }
        }
    }
}

export default pokemonServices;
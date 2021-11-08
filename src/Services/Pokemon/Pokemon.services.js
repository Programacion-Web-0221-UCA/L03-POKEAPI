import { BASE_URL, fetchAllPokemons, fetchUrlPokemons, transformPokemonData  } from "./helper";

export const pokemonServices = {
  getPokemons: async (filters = {}) => {
    const { limit = 20, offset = 0} = filters
    try {
      const urlPokemons = await fetchAllPokemons({ limit, offset });
      const pokemons = await fetchUrlPokemons(urlPokemons);

      const mappedPokemons = pokemons.map(transformPokemonData);

      return { success: true, pokemons: mappedPokemons };

    } catch (error) {
      console.error({ error });
      return { success: false, pokemons: [] };
    }
  },

  getPokemon: async (name = "") => {
    try{
      const response = await fetch(`${BASE_URL}pokemon/${name}`)
      const data = await response.json()
      if(!data) throw new Error('Pokemon not found')

      const transformedPokemon = transformPokemonData(data)
      

      return { success: true, pokemon: transformedPokemon};

    }catch(error){
      console.error({ error });

      return { success: false, pokemon: null };
    }
  }

};

const BASE_URL = "https://pokeapi.co/api/v2/";

const fetchUrlPokemons = async ({ limit=100, offset=0 }) => {
  const pokemonsFetch = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await pokemonsFetch.json();
  const pokemonsUrl = pokemons.results.map((result) => result.url);

  return pokemonsUrl;
};

const fetchPokemons = async (urlPokemons) => {
  const urlPromises = urlPokemons.map((url) => fetch(url));

  const results = await Promise.all(urlPromises); // dame un array de PROMESAS -> hace await a cada una de ellas
  const resultsJSON = results.map((response) => response.json());

  const pokemons = await Promise.all(resultsJSON);
  return pokemons;
};

const mapRawPokemon = (pokemonRaw) => {
  const abilities = pokemonRaw.abilities.map((ability) => {
    return ability.ability.name;
  });

  const types = pokemonRaw.types.map((type) => {
    return type.type.name;
  });

  const pokemon = {
    name: pokemonRaw.name,
    id: pokemonRaw.id,
    abilities: abilities,
    types: types,
    thumbnail: pokemonRaw.sprites.front_default,
  };

  return pokemon;
}

export const pokemonServices = {
  getAllPokemon: async (offset=0) => {
    try {
      const urlPokemons = await fetchUrlPokemons({ limit: 100, offset: offset });

      const fetchedUrls = await fetchPokemons(urlPokemons);

      const mappedPokemons = fetchedUrls.map((pokemonRaw) => {
        return mapRawPokemon(pokemonRaw)
      });

      return mappedPokemons;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getPokemon: async (name="") => {
    let pokemon = undefined;

    try {
      const response = await fetch(`${BASE_URL}pokemon/${name}`);

      if(response.ok) {
        const pokemonRaw = await response.json();
        pokemon = mapRawPokemon(pokemonRaw);
      }

    } catch (error) {
      console.error("Failed in fetch");
    } finally {
      return pokemon;
    }
  }
};

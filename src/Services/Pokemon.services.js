const BASE_URL = "https://pokeapi.co/api/v2/";

const fetchUrlPokemons = async (limit) => {
  const pokemonsFetch = await fetch(`${BASE_URL}pokemon?limit=${limit}`);
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

export const pokemonServices = {
  getAllPokemon: async () => {
    try {
      const urlPokemons = await fetchUrlPokemons({ limit: 20 });

      const fetchedUrls = await fetchPokemons(urlPokemons);

      const mappedPokemons = fetchedUrls.map((pokemonRaw) => {
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
      });

      return mappedPokemons;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

const BASE_URL = "https://pokeapi.co/api/v2/";

const fetchAllPokemons = ({ limit, offset }) => {
  return fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => data.results.map((pokemon) => pokemon?.url));
};

const fetchUrlPokemons = async (urlPokemons) => {
  const fetchedPokemons = urlPokemons.map((url) => fetch(url));
  const pokemons = await Promise.all(fetchedPokemons);

  return Promise.all(pokemons.map((pokemon) => pokemon.json()));
};

const transformPokemonData = (pokemon) => {
  return {
    name: pokemon.name,
    abilities: pokemon.abilities.map((ability) => ability.ability.name),
    type: pokemon.types.map((type) => type.type.name),
    pokedexNumber: pokemon.id,
    thumbnail: pokemon.sprites.front_default,
  };
};

export const pokemonServices = {
  getPokemons: async ({ limit = 5, offset = 0 }) => {
    try {
      const urlPokemons = await fetchAllPokemons({ limit, offset });
      const pokemons = await fetchUrlPokemons(urlPokemons);

      const mappedPokemons = pokemons.map(transformPokemonData);
      return mappedPokemons;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
};

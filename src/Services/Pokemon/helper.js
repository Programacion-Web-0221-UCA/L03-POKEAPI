export const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchAllPokemons = async ({ limit, offset }) => {
  const response = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
  const pokemonResponse = await response.json();

  const pokemonsUrl = pokemonResponse.results.map((pokemon) => pokemon?.url);

  return pokemonsUrl;
};

export const fetchUrlPokemons = async (urlPokemons) => {
  const fetchedPokemons = urlPokemons.map((url) => fetch(url));
  const pokemons = await Promise.all(fetchedPokemons);

  return Promise.all(pokemons.map((pokemon) => pokemon.json()));
};

export const transformPokemonData = (pokemonRaw) => {
  if(!pokemonRaw) return null

  return {
    name: pokemonRaw.name,
    abilities: pokemonRaw.abilities.map((ability) => ability.ability.name),
    types: pokemonRaw.types.map((type) => type.type.name),
    id: pokemonRaw.id,
    thumbnail: pokemonRaw.sprites.front_default,
  };
};
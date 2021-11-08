import { useEffect, useState } from "react";
import Pokedex from "./Components/Pokedex/Pokedex";
import { pokemonServices } from "./Services/Pokemon.services";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await pokemonServices.getAllPokemon();
      setPokemons(response);
    };

    fetchPokemons();
  }, []);

  return (
    <main>
      <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;

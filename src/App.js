import { useState, useEffect } from "react";

import pokemonServices from "./Services/Pokedex/Pokedex.service";

import Pokedex from "./Components/Pokedex/Pokedex";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";
import Party from "./Components/Party/Party";

function App() {
  const [party, setParty] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  //useEffect garantiza que la función se ejecute solamente una vez, lo cual evita un loop infinito
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        //Aquí obtenemos los pokemons que devuelve la API ya transformados
        const response = await pokemonServices.getAllPokemons(25, 0);
        setPokemons(response);
      }
      catch (error) {
        console.error(error);
      }
    }

    fetchPokemons();
  }, [])

  const onAddToPartyHandler = (id) => {
    const pokemon = id ? pokemons.find(poke => poke.id === id) : searchedPokemon;

    if (pokemon && party.length < 6) {
      setParty([
        ...party,
        {
          ...pokemon,
          partyId: `${pokemon.name}_${pokemon.id}_${
            new Date().getTime() / 1000
          }`,
        },
      ]);
    }
  }

  const onDeleteInPartyHandler = (partyId) => {
    const newParty = party.filter((poke) => poke.partyId !== partyId);
    setParty(newParty);
  };

  const onSearchHandler = async (name) => {
    try {
      const response = await pokemonServices.getPokemon(name);

      if(!response['success']){
        throw new Error('Cannot find the pokemon');
      }

      setSearchedPokemon(response['pokemon']);
    }
    catch (error){
      console.error({error});
    }
  }

  return (
    // Recordar que min-h-fullscreen es un valor personalizado en tailwind.config.js
    <div className="flex flex-col w-full min-h-fullscreen bg-gray-200">
        {/* sticky, top-0 y left-0 se colocan para que el header quede "pegado" a la parte de arriba al hacer scroll */}
        <header className="flex justify-center items-center w-full h-16 sticky top-0 left-0 bg-gray-300 z-10">
            <h1 className="text-black font-oswald">Pokedex National</h1>
        </header>
        <main className="flex flex-col justify-center p-8 gap-8">
            <Party party={party} onDeleteInParty={onDeleteInPartyHandler}/>

            <Search onSubmit={onSearchHandler}/>
            {searchedPokemon && <div className="self-center" ><Card pokemon={searchedPokemon} onAdd={() => {onAddToPartyHandler()}}/></div> }

            <Pokedex pokemons={pokemons} onAddToParty = {onAddToPartyHandler} />
        </main>
    </div>
  );
}

export default App;

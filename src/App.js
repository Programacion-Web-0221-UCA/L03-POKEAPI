import { useState, useEffect } from "react";

import "./App.css";

import Pokedex from './Components/Pokedex/Pokedex';
import Party from "./Components/Party/Party";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";

import { pokemonServices } from "./Services/Pokemon/Pokemon.services";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [party, setParty] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const filters = { limit: 20, offset: 0 };
        const response = await pokemonServices.getPokemons(filters);

        if(!response['success']){
          throw new Error('Something was wrong')
        }

        setPokemons(response['pokemons'])
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  const onAddToPartyHandler = (id) => {
    const pokemon = id ? pokemons.find(poke => poke.id === id) : searchedPokemon;

    if(pokemon && party.length < 6) {
      setParty([...party, {...pokemon, partyId: `${pokemon.name}_${pokemon.id}_${new Date().getTime() / 1000}`}]);
    }
  }

  const onDeleteInPartyHandler = (partyId) => {
    const newParty = party.filter(poke => poke.partyId !== partyId);
    setParty(newParty);
  }

  const onSearchHandler = async (name) => {
    try{
      const response = await pokemonServices.getPokemon(name);
      if(!response['success']){
        throw new Error('Cannot find the pokemon')
      }

      setSearchedPokemon(response['pokemon'])
    }catch(error){
      console.error({error})
    }
  }
  return (
    <div className="w-full min-h-fullscreen flex flex-col bg-gray-200">
      <header className="w-full h-16 bg-gray-300 sticky top-0 left-0 flex justify-center items-center text-black font-oswald z-10"> National Pokedex </header>

      <main className="p-8 flex flex-col justify-center gap-8">
        <Party party={party} onDeleteInParty = {onDeleteInPartyHandler}/>

        <Search onSubmit={onSearchHandler}/>
        {searchedPokemon && <div className="self-center"> <Card pokemon={searchedPokemon} onAdd = { () => { onAddToPartyHandler() } }/> </div>}
        
        <Pokedex pokemons={pokemons} onAddToParty = {onAddToPartyHandler}/>
      </main>      
    </div>
  );
}

export default App;

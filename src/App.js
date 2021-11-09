import { useState, useEffect } from "react"

import pokemonServices from "./Services/Pokedex/Pokedex.service";

import Pokedex from "./Components/Pokedex/Pokedex"

function App() {
  const [pokemons, setPokemons] = useState([]);

  //useEffect garantiza que la función se ejecute solamente una vez, lo cual evita un loop infinito
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        //Aquí obtenemos los pokemons que devuelve la API ya transformados
        const response = await pokemonServices(5, 0)
        setPokemons(response)
      }
      catch(error) {
        console.error(error)
      }
    }

    fetchPokemons()
  }, [])

  //fetchPokemons()
    return (
      <div className="bg-gray-100">
        <header className="flex justify-center items-center w-full ">
          <h1>Pokedex National</h1>
        </header>
        <Pokedex pokemons={pokemons}/>   
      </div>
  );
}

export default App;

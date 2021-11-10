import { useState, useEffect } from "react";

import pokemonServices from "./Services/Pokedex/Pokedex.service";

import Pokedex from "./Components/Pokedex/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);

  //useEffect garantiza que la función se ejecute solamente una vez, lo cual evita un loop infinito
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        //Aquí obtenemos los pokemons que devuelve la API ya transformados
        const response = await pokemonServices(25, 0);
        setPokemons(response);
      }
      catch (error) {
        console.error(error);
      }
    }

    fetchPokemons();
  }, [])

  return (
    // Recordar que min-h-fullscreen es un valor personalizado en tailwind.config.js
    <div className="flex flex-col w-full min-h-fullscreen bg-gray-200">
        {/* sticky, top-0 y left-0 se colocan para que el header quede "pegado" a la parte de arriba al hacer scroll */}
        <header className="flex justify-center items-center w-full h-16 sticky top-0 left-0 bg-gray-300 z-10">
            <h1 className="text-black font-oswald">Pokedex National</h1>
        </header>
        <main className="flex flex-col justify-center p-8 gap-8">
            <Pokedex pokemons={pokemons} />
        </main>
    </div>
  );
}

export default App;

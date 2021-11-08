import { useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import { pokemonServices } from "./Services/Pokemon/Pokemon.services";

function App() {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const filters = { limit: 5, offset: 0 };
        const response = await pokemonServices.getPokemons(filters);

        console.log({ response });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);
  return (
    <div className="w-full min-h-fullscreen flex flex-col bg-gray-200">
      <header className="w-full h-16 bg-white sticky top-0 left-0"></header>

      <Card></Card>
    </div>
  );
}

export default App;

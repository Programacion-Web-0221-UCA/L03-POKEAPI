import Card from "../Card/Card";

const Pokedex = ({ pokemons=[],  onAddToParty = () => {} }) => { 
  return (
    <div className=" w-full flex justify-center items-center gap-4 flex-wrap">
      {
        pokemons.map( pokemon => {
          return <Card
            onAdd= { () => { onAddToParty(pokemon.id) } } 
            key={pokemon.id}
            pokemon={pokemon}
            />
        })
      }
    </div>  
  );
}

export default Pokedex;
import Card from "../Card/Card"

export default function Pokedex({ pokemons = [], onAddToParty = () => {} }){
 if(pokemons.length === 0) return <div className="bg-red-400">Loading...</div>
 
 return <div className="flex gap-2 justify-center mt-3 flex-wrap">
    { pokemons.map(pokemon => {
        return <Card
                  key={pokemon.id}
                  onAdd={ () => { onAddToParty(pokemon.id) } }
                  name={pokemon.name}
                  id={pokemon.id}
                  types={pokemon.types} 
                  abilities={pokemon.abilities}
                  thumbnail={pokemon.thumbnail}/>

    })}
 </div>
}
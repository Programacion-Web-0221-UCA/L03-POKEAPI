import Card from "../Card/Card";

// Componente para renderizar una card por cada pokemon en el arreglo
const Pokedex = ({ pokemons = [] }) => {
    return (
        <div className="flex justify-center items-center flex-wrap w-full gap-4">
            {
            pokemons.map(
                pokemon =>  {
                    return <Card key={pokemon.id} pokemon={pokemon} />
                })
            }
        </div>
    )
}

export default Pokedex;
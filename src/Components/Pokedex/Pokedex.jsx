import Card from "../Card/Card";

// Componente para renderizar una card por cada pokemon en el arreglo
const Pokedex = ({ pokemons = [] }) => {
    return (
        <div>
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
import Card from "../Card/Card"

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

export default Pokedex
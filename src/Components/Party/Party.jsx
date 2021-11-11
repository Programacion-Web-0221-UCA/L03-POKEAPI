import PartyPokemon from "./PartyPokemon/PartyPokemon";

const Party = ({ party = [], onDeleteInParty = () => { } }) => {

    const partyToRender = Array(6).fill({});

    party.forEach((poke, i) => {
        if (i < 6) partyToRender[i] = { ...poke };
    });

    console.log(partyToRender);

    return (
        <div className="w-full flex flex-wrap gap-8 justify-center">
            {partyToRender.map((pokemon, i) => {
                return (
                    <PartyPokemon
                        pokemon={pokemon}
                        onDelete={() => {
                            onDeleteInParty(pokemon.partyId);
                        }}
                        key={pokemon.partyId ?? `Empty_${i}`}
                    />
                );
            })}
        </div>
    );
};

export default Party;
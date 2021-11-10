import PartyPokemon from "./PartyPokemon/PartyPokemon";

const Party = ({ party=[], onDeleteInParty = ()=> {} }) => {
  const partyToRender = Array(6).fill({});
  party.forEach((poke, i) => { partyToRender[i] = { ...poke } });

  return (
    <div className="w-full flex flex-wrap gap-8 justify-center items-center">
      {
        partyToRender.map((poke, i) => {
          return (
              <PartyPokemon
                onDelete={ () => { poke.partyId && onDeleteInParty(poke.partyId) }}
                key={ poke.partyId ?? `Empty_${i}` } 
                pokemon={poke} />
          );
        })
      }
    </div>
  );
}

export default Party;
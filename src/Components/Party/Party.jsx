import React from "react";

const Party = ({ party = [] }) => {

  const partyToRender = Array(6);
  party.forEach((poke, i) => { partyToRender[i] = { ...poke } });

  return (
    <div className="w-full flex flex-wrap">
      
    </div>
  );
}

export default Party;
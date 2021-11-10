import { AiFillDelete as TrashIcon } from 'react-icons/all';

import pokebola from '../../../Assets/Img/pokemon.png';

const PartyPokemon = ({ pokemon = {}, onDelete = () => {} }) => {
  return (
    <div className="relative" onClick={()=> { onDelete(); }}>
      { pokemon.id && <div className="absolute top-0 right-0 cursor-pointer"> 
        <TrashIcon className="text-red-700 w-6 h-6"/>
      </div> }

      <div className="w-24 h-24 p-1 rounded-full bg-gray-300 select-none">
        <img className="w-full h-full object-cover" src={pokemon.thumbnail ?? pokebola} alt={pokemon.name ?? "Empty Space"}/>
      </div>
      <p className="text-center mt-2 font-roboto capitalize">{ pokemon.name ?? "Empty" }</p>
    </div>
  );

}

export default PartyPokemon;
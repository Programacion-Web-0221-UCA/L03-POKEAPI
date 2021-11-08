import Group from "./Group/Group";

import pokebola from '../../Assets/Img/pokemon.png'
import { IoAdd } from 'react-icons/all'; 

const Card = ({ pokemon, onAdd = () => {} }) => {
    const src = pokemon?.thumbnail ?? pokebola;

    return (
        <div className="w-72 h-96 bg-white rounded shadow-lg relative">
            <div className="absolute top-1 right-1 p-1 text-white bg-indigo-700 rounded cursor-pointer transform hover:scale-110 transition-all duration-75 ease-in-out"
              onClick = {() => { onAdd() }}>
              <IoAdd className="w-5 h-5"/>
            </div>
            <div className="w-72 h-40 rounded-t flex justify-center items-center" style={{backgroundColor: "#F6F6F6"}}>
                <img src={src} className="w-32 h-32" alt={`pokemon ${pokemon.name}`}/>
            </div>
            <div className="px-4">
                <div className="flex justify-between items-center py-1.5">
                    <h2 className="font-roboto text-xl capitalize" style={{color: "#454545"}}>{pokemon.name}</h2>
                    <p className="font-roboto text-xl" style={{color: "#6D6D6D"}}>Nº {pokemon.id}</p>
                </div>
                <Group title="Types" items={pokemon.types}/>
                <Group title="Abilities" items={pokemon.abilities}/>
            </div>
        </div>
    );
};

export default Card;
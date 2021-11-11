import Group from "./Group/Group";
import pokebola from "../../Assets/Img/pokemon.png";
import { IoAdd } from "react-icons/all";

const Card = ({ pokemon, onAdd = () => { } }) => {
    //Si la imagen del pokemon es nula o indefinida, se muestra por defecto una imagen de pokebola
    const src = pokemon.thumbnail ?? pokebola;

    return (
        <div className="relative w-72 h-96 bg-white shadow-lg rounded">
            {/* absolute, top-1, right-1 se utiliza para colocar el ícono en la esquina superior derecha */}
            <div className="absolute top-1 right-1 text-white bg-indigo-700 rounded p-1 cursor-pointer transform hover:scale-110 transition-all duration-75 ease-in-out" onClick={() => { onAdd(); }}>
                {/* React icon de signo más */}
                <IoAdd className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-72 h-40 bg-gray-100 rounded-t" >
                <img src={src} className="w-32 h-32" alt={pokemon.name} />
            </div>
            <div className="px-4">
                <div className="flex justify-between items-center py-1.5">
                    <h2 className="font-roboto text-xl font-medium capitalize">{pokemon.name}</h2>
                    <p className="font-roboto text-xl font-light text-gray-500">N° {pokemon.id}</p>
                </div>
                <Group title="Types" items={pokemon.types} />
                <Group title="Abilities" items={pokemon.abilities} />
            </div>
        </div>
    );
};

export default Card;
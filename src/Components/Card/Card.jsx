import Group from "./Group/Group";
import pokebola from "../../Assets/Img/pokemon.png";
import { IoAdd } from "react-icons/all";

const Card = ({ pokemon }) => {
    //Si la imagen del pokemon es nula o indefinida, se muestra por defecto una imagen de pokebola
    const src = pokemon.thumbnail ?? pokebola;

    return (
        <div>
            <div>
                {/* React icon de signo más */}
                <IoAdd/>
            </div>
            <div>
                <img src={ src } alt={ pokemon.name }/>
            </div>
            <div>
                <div>
                    <h2>{ pokemon.name }</h2>
                    <p>{ pokemon.id }</p>
                </div>
                <Group title="Types" items={ pokemon.types }/>
                <Group title="Abilities" items={ pokemon.abilities } />
            </div>
        </div>
    )
}

export default Card;
import Chip from "./Chip/Chip"

// Arreglo de colores por tipo de pokemon
import { typeColors } from '../../../Constants/Pokemon';

const Group = ({ title = "", items = []}) => {
    return(
        <div>
            <h3>{ title }</h3>
            <div>
                {/* Se renderiza un Chip por cada tipo/habilidad que trae el pokemon */}
                { items.map(
                    item => <Chip key={item} item={item} color={typeColors[item]} />
                )}
            </div>
        </div>
    )
}

export default Group;
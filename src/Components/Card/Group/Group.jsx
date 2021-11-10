import Chip from "./Chip/Chip"

// Arreglo de colores por tipo de pokemon
import { typeColors } from '../../../Constants/Pokemon';

const Group = ({ title = "", items = []}) => {
    return(
        <div>
            <h3 className="font-roboto text-sm mt-3">{ title }</h3>
            <div className="flex justify-start items-center gap-4 py-2">
                {/* Se renderiza un Chip por cada tipo/habilidad que trae el pokemon */}
                { items.map(
                    item => <Chip key={item} item={item} color={typeColors[item]} />
                )}
            </div>
        </div>
    )
}

export default Group;
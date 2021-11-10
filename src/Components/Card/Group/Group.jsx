import Chip from "./Chip/Chip"

const Group = ({ title = "", items = []}) => {
    return(
        <div>
            <h3>{ title }</h3>
            <div>
                {/* Se renderiza un Chip por cada tipo/habilidad que trae el pokemon */}
                { items.map(
                    item => <Chip key={item} item={item} />
                )}
            </div>
        </div>
    )
}

export default Group;
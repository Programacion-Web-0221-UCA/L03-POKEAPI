import Chip from "./Chip/Chip"

const Group = ({ title = "", items = []}) => {
    return(
        <div>
            <h3>{ title }</h3>
            <div>
                { items.map(
                    item => <Chip key={item} item={item} />
                )}
            </div>
        </div>
    )
}

export default Group
import { typeColors } from "../../../Constants/Pokemon"
import Item from "./Item/Item"

export default function Group({ title = '', items = []}){
    return <div className="flex flex-col mt-2">
        <h3 className="capitalize text-base">{ title} </h3>

        <div className="flex gap-3">
            {items.map(item => {
                const color = typeColors[item] ?? "rgb(191, 191, 191)"
                return <Item key={item} name={item} color={color} />
           })}
        </div>
    </div>
}
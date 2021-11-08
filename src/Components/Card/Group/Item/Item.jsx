export default function Item({name, color}) {
    return <div className="text-white p-1" style={{backgroundColor: color}}>{name}</div>
}
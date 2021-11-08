export default function Information({ name, id}){
    return <div className="flex justify-between">
        <h2 className="font-roboto text-lg capitalize">{name}</h2>
        <p className="font-roboto text-xl">N {id}</p>
    </div>

}
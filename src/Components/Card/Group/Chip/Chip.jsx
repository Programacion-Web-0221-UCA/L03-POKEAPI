// Por defecto, los chips tendrán color gris (#bfbfbf), si no tomará el color que le enviemos como parámetros
const Chip = ({ item = "", color="#bfbfbf" }) => {
    return (
        // fontVariantCaps sirve para transformar la fuente en mayúsculas
        <p className="font-roboto bg-gray-300 rounded px-2 py-1" 
            style={{color: "#fff", backgroundColor: color, fontVariantCaps: "small-caps"}}> 
            { item }
        </p>
    )
}

export default Chip;
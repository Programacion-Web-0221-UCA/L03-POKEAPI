
const Chip = ({ item, color="#bfbfbf" }) => {
    return (<p className="px-2 py-1 bg-gray-300 rounded font-roboto" style={{color: "#fff", backgroundColor: color, fontVariantCaps: "small-caps"}}>{ item }</p>);
}

export default Chip;
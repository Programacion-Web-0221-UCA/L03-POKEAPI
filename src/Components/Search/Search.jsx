import { useState } from "react";

const Search = ({ onSearch = () => {} }) => {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearch(name);
  }
  
  return (
    <form onSubmit={onSubmitHandler}>
      <input className="border-2 border-blue-400" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
      <button className="border-blue-400 border-2" type="submit"> Buscar </button>
    </form>
  );
}

export default Search;
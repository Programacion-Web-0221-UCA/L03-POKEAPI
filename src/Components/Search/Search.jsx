import { useState } from 'react'

const Search = ({onSubmit}) => {
  const [name, setName] = useState('');

  const onSubmitHandler = (e) => {
      e.preventDefault()
      onSubmit(name)
  };

  const handleOnChange = (e, save) => {
    save(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center">
      <input type="text" placeholder="Search for a pokemon" name="search" className="rounded-l py-1 px-2 font-roboto text-base focus:outline-none focus:border-transparent" autoComplete="on" style={{color: "6D6D6D"}} onChange={(e) => {handleOnChange(e, setName);}} />
      <button type="submit" className="rounded-r px-2" style={{backgroundColor: "#fff", color: "6D6D6D"}}>Search</button>
    </form>
  );
};

export default Search;
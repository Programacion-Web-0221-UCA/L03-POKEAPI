import { useState } from "react";



const Search = ({ onSubmit }) => {
    const [name, setName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    const handleOnChange = (e, save) => {
        save(e.target.value);
    };

    return (
        <form className="flex justify-center" onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Search for a pokemon"
                name="search"
                className="rounded-l py-1 px-2 font-roboto text-base focus:outline-none focus:border-transparent"
                autoComplete="on"
                onChange={e => { handleOnChange(e, setName); }}
                style={{ color: "6D6D6D" }}
            />
            <button
                type="submit"
                className="rounded-r px-2"
                style={{ backgroundColor: "#fff", color: "6D6D6D" }}
            >
                Search
            </button>
        </form>
    );
};

export default Search;
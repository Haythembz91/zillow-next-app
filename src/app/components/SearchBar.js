
const SearchBar =()=>{


    return (
        <div className="search-bar">
            <form>
                <label htmlFor="search-input">Search: </label>
                <input type="text" id="search-input" placeholder="Search location"></input>
                <button type="button">Search</button>
            </form>

        </div>
    )
}

export default SearchBar
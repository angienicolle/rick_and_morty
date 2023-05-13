import SearchBar from '../ComponenteSearchBar/SearchBar';

const NavBar =({onSearch}) =>{
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default NavBar;
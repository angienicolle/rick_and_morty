import SearchBar from '../ComponenteSearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom';
import style from './NavBar.module.css'

const NavBar =({onSearch}) =>{
    return(
        <div>
            <NavLink className={style.buttons}>
            <Link to={"/home"}><p>Home</p></Link>
            <Link to={"/about"}><p>About</p></Link>
            </NavLink>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default NavBar;
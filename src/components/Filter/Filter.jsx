import { NavLink } from "react-router-dom"
import "./Filter.css"

const Filter = () => {
    return (
        <div className="container-filter">
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/bicicleta">Bicicletas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/prenda">Ropas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/consolas">Consolas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/celular">Celulares</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/laptop">Laptops</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/tv">Televisores</NavLink>
        </div>
    )
}

export default Filter;
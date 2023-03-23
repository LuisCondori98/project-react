import { NavLink } from "react-router-dom"
import "./Filter.css"

const Filter = () => {

    return (
        <div className="container-filter">
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/zapatillas">Zapatillas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/bicicleta">Bicicletas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/celular">Celulares</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/tablet">Tablet</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/audio">Audio</NavLink>
        </div>
    )
}

export default Filter;
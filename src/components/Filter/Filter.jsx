import { NavLink } from "react-router-dom"
import "./Filter.css"

const Filter = () => {
    return (
        <div className="container-filter">
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/bicicleta">Bicicletas</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/prenda">Ropa</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/componente">Componentes</NavLink>
            <NavLink className={({isActive}) => isActive? "ActiveLink" : "Link"} to="/category/accesorio">Accesorios</NavLink>
        </div>
    )
}

export default Filter;
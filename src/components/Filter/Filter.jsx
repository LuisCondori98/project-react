import { Link, NavLink } from "react-router-dom"
import "./Filter.css"
import { useState } from "react"

const Filter = () => {

    const [busqueda, setBusqueda] = useState("")

    const url = "https://firestore.googleapis.com/v1/projects/my-web-6e66e/databases/(default)/documents/productos";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("Datos obtenidos:", data.documents);
    })
    .catch(error => {
        console.error("Error al obtener datos:", error);
    });


    console.log(busqueda)

    return (
        <div className="container-filter">
            <input class="form-control"  type="search" placeholder="Search" aria-label="Search" onChange={e => setBusqueda(e.target.value)}></input>
            <div className="filter-buttons">
                <Link class="btn btn-success" to={"/productos"}>Todos los productos</Link>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </button>
                    <ul class="dropdown-menu">
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/bicicleta">Bicicletas</NavLink>
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/prenda">Ropas</NavLink>
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/consolas">Consolas</NavLink>
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/celular">Celulares</NavLink>
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/laptop">Laptops</NavLink>
                    <NavLink className={"dropdown-item"}/*className={({isActive}) => isActive? "ActiveLink" : "Link"}*/ to="/category/tv">Televisores</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter;
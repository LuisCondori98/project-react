import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Link className="navbar-title" to="/">City Shop</Link>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{display:"flex", justifyContent: "center"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">‎</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Inicio</NavLink>
                            <NavLink className="nav-link" to="/productos">Productos</NavLink>
                            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar;
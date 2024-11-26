import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Link className="navbar-title" to="/">SteelEcht</Link>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{display:"flex", justifyContent: "center"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/productos">Productos</Link>
                            <Link className="nav-link" to="/servicios">Servicios</Link>
                            <Link className="nav-link">Contacto</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-title" to="/">SteelEcht</Link>
                <ul className="navbar-list">
                    <Link className="list-item" to="/">Inicio</Link>
                    <Link className="list-item" to="/productos">Productos</Link>
                    <Link className="list-item" to="/servicios">Servicios</Link>
                    <Link className="list-item">Contacto</Link>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar;
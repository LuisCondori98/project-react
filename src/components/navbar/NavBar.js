import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Steelshet</h1>
            <ul className="navbar-list">
                <li><a>Inicio</a></li>
                <li><a>Productos</a></li>
                <li><a>Servicios</a></li>
                <li><a>Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
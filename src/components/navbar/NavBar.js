import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1>Steelshet</h1>
            <div className="NavItems">
                <button>Inicio</button>
                <button>Productos</button>
                <button>Servicios</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
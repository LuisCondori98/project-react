import "./CartWidget.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from "react-router-dom"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    const navigate = useNavigate()

    return  (
        <div className="i-carrito">
            <img src="../../images/icarrito.png" alt="icono-carrito" onClick={() => navigate("/cart")}/>
            <h4 className={totalQuantity > 0 ? "red" : "null"}>
                {totalQuantity}
            </h4>
        </div>
    )
}

export default CartWidget
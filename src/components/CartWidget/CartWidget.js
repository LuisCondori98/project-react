import iCarrito from "./icarrito.png"

const CartWidget = () => {
    return  (
        <div style={{color: "white", fontSize: "25px"}}>
            <img src={iCarrito} alt="icono-carrito" style={{height: "25px", width: "25px"}} />
            {3}
        </div>
    )
}

export default CartWidget
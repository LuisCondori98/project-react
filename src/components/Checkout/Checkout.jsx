import { useContext, useState } from "react"
import "./Checkout.css"
import { CartContext } from "../../context/CartContext"
import Footer from "../Footer/Footer"

const Checkout = () => {

const {cart, total} = useContext(CartContext)

const handleConfirm = (e) => {
    e.preventDefault()

    const objOrder = {
        buyer: {
            nombre: "Luis",
        },
        items: cart,
        total: total
    }
    console.log(objOrder)
}

  return (
    <div>
        <div className="formulario-container">
            <form className="formulario">
                <h2>Datos de cliente</h2>
                <label>Nombres</label>
                <input type="text" name="nombres" id="nombres" />
                <label>Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" />
                <label>e-mail</label>
                <input type="text" name="email" id="email" />
                <label>telefono</label>
                <input type="tel" name="telefono" id="telefono" />
                <button type="submit" onClick={handleConfirm}>Generar pedido</button>
            </form>
            <div className="formulario-container-info">
                <img src="../../images/logo.png"/>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} style={{display: "flex", justifyContent: "center", gap: "50px"}}>
                                <h3>{prod.Nombre}</h3>
                                <h3>S/.{prod.Precio}</h3>
                                <h3>{prod.quantity}u</h3>
                            </div>
                        )
                    })
                }
                <h2>Total: S/.{total}.00</h2>
            </div>
            <div/>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout
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
                <input type="text" name="nombres" id="nombres" required/>
                <label>Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" required/>
                <label>e-mail</label>
                <input type="text" name="email" id="email" required/>
                <label>telefono</label>
                <input type="tel" name="telefono" id="telefono" required />
                <button type="submit" onClick={handleConfirm}>Generar pedido</button>
            </form>
            <div className="formulario-container-info">
            <img src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Flogo.png?alt=media&token=5962cda6-557b-4980-bcd8-125cf99fb416" style={{backgroundColor: "white", borderRadius: "50%", height: "170px", padding: "5px"}} alt="logo" />
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
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import "./Cart.css"

const Cart = () => {

const [cupon, setCupon] = useState("")
const [newTotal, setNewTotal] = useState(0)
const {cart, total, totalQuantity} = useContext(CartContext)

const validar = () => {

  if(cupon == "LUISCO10") {

    setNewTotal(total - 10)
  }else {

    setNewTotal(0)
  }

  console.log("ingreso cupon " + cupon)
}

const navegacion = useNavigate()
if(totalQuantity <= 0)
{
  return ( 
    <div className="container-empty">
      <div>
        <h4>Su carrito esta vacio</h4>
        <img src="../../images/i-carrito.gif" />
      </div>
    </div>
    )
}

  return (
    <div className="container-cart">
      <div className="container-detail">
        {
          totalQuantity <= 0 ?
          <span></span> 
          :
          cart.map(prod => {
            return (
                <div key={prod.id} className="cart-detail">
                    <img src={prod.img}/> <h5>{prod.Nombre}</h5> <h5>S/. {prod.Precio}</h5> <h5>Cantidad:  {prod.quantity}</h5>
                </div>
            )
        })
        }
      </div>
      <div>
          <div className='cupon'>
            <h3>Ingrese codigo de cupon:</h3>
            <input type='text' onChange={(e) => setCupon(e.target.value)}/>
            <button type="submit" onClick={() => validar()} style={{margin: "0px 20px", padding: "5px"}}>Validar</button>
          </div>
        {
          totalQuantity <= 0 ? <h3></h3> : 
          <div className="resumen">
            <h2>Resumen</h2>
            <h3>Descuento S/. {newTotal}</h3>
            <h3 className="total">Total S/. {total}</h3>
            <button className="boton-fn" onClick={() => navegacion("/checkout")}
            >Finalizar compra</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
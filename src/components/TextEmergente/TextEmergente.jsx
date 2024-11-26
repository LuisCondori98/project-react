import { Link } from "react-router-dom"
import "./TextEmergente.css"

const TextEmergente = () => {

    const Delete = () => {
        const container = document.querySelector(".text-emergente")
        container.remove()
    }

  return (
    <div className="text-emergente">
        <h2>Hasta 15% de descuento en <Link to="/category/componente" className="label-textEmergente">CONSOLAS</Link>, acercate ya...!</h2>
        <span className="delete" onClick={() => Delete()}>x</span>
    </div>
  )
}

export default TextEmergente
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, img, Precio, Nombre}) => {

    return (
        <div className="item" data-aos="flip-left">
            <img src={img} alt={img} />
            <h4>{Nombre}</h4>
            <h5>S/. {Precio}</h5>
            <Link className="link" to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
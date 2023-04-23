import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({img, id, name, price}) => {
    return (
        <div className="item">
            <img src={img} />
            <h4>{name}</h4>
            <h5>S/. {price}</h5>
            <Link className="link" to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
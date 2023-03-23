import "./ItemDetail.css"
import Counter from "../Counter/Counter"

const ItemDetail = ({name, price, description, img, stock}) => {
    return (
        <div className="item-detail">
            <img src={img} />
            <h1>{name}</h1>
            <h3>S/. {price}</h3>
            <p>{description}</p>
            <p>stock: {stock} u</p>
            <Counter initial={0} stock={stock}/>
        </div>
    )
}

export default ItemDetail
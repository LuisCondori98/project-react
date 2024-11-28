import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({ products }) =>{

    return (
        <div className="container-item-lists">
            {
                products.map(product => {
                    return (
                        <Item key={product.id} {...product}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList
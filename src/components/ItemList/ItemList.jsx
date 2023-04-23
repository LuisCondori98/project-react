import "./ItemList.css"
import Item from "../Item/Item"
import { useState } from "react"

const ItemList = ({ products }) =>{

    return (
        <div className="container-item">
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
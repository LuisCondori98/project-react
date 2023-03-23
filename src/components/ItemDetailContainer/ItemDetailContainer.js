import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(product => {
                setProduct(product)
            })
    }, [itemId])

    return (
        <div>
            <h1 style={{textAlign: "center", backgroundColor: "rgb(178, 2, 2)", color: "white", padding: "5px", fontSize: "18px"}}>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
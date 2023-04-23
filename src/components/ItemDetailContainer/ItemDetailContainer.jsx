import { useEffect, useState } from "react"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        const productoRef = doc(db, "productos", itemId)

        getDoc(productoRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productoAdapted = {id: snapshot.id, ...data}
                setProduct(productoAdapted)
            })
    }, [itemId])

    return (
        <div>
            <h1 className="detail-title">Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
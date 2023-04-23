import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig";
import Whatsapp from "../Whatsapp/Whatsapp"

const ItemListContainer = ({ greeting}) => {
    const [productsState, setProductsState] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const productosRef = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId))
        : collection(db, "productos")

        getDocs(productosRef)
                .then(snapshot => {
                    const productosAdapted = snapshot.docs.map(doc => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductsState(productosAdapted)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [categoryId])

    if(loading) {
        return (
            <div className="container-loading" />
        )
    }

    return (
        <div className="itemListContainer">
            <h2 style={{padding: 10}}>{greeting}</h2>
            <Filter />
            <ItemList products={productsState}/>
            <Whatsapp />
        </div>
    )
}

export default ItemListContainer